import type { Meta, StoryObj } from '@storybook/react';
import { InferType, number, object, string } from 'yup';

import { Form } from '../form';

import { WrappedInput, WrappedInputProps } from './wrappedInput';

/**
 * A wrapped text input for forms. Includes helptext, labels and errors.
 */
const meta: Meta<typeof WrappedInput> = {
  title: 'Library/Interactive/Form/Input',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedInput,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedInput>;

const schema = object({
  firstName: string().required('We have to call you something, soz.'),
  lastName: string().optional(),
  age: number()
    .required('You must exist.')
    .integer('Whole numbers only.')
    .positive('No negative ages.')
    .min(18, '18+ policy.'),
  email: string()
    .email('Your email is either very avant-garde or wrong.')
    .required(),
});

interface SignInForm extends InferType<typeof schema> {}

const Render = (args: WrappedInputProps<SignInForm>) => {
  const onSubmit = (data: SignInForm) => console.log(data);
  return (
    <Form<SignInForm>
      onSubmit={onSubmit}
      onBack={() => {}}
      defaultValues={{ firstName: 'Frank' }}
      schema={schema}
    >
      <WrappedInput<SignInForm> {...args} />
    </Form>
  );
};

export const Text: Story = {
  render: (args) => Render(args as WrappedInputProps<SignInForm>),
  args: {
    type: 'text',
    name: 'firstName',
    label: 'First name',
  },
};

export const Number: Story = {
  render: (args) => Render(args as WrappedInputProps<SignInForm>),
  args: {
    type: 'number',
    name: 'age',
    label: 'Age',
    helpText: 'Whole years only please.',
    step: 1,
  },
};

export const Email: Story = {
  render: (args) => Render(args as WrappedInputProps<SignInForm>),
  args: {
    type: 'email',
    name: 'email',
    label: 'Email',
  },
};
