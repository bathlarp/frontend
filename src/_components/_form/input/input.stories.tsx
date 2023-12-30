import { useForm } from 'react-hook-form';
import type { Meta, StoryObj } from '@storybook/react';

import { WrappedInput, WrappedInputProps } from './wrappedInput';

/**
 * A wrapped text input for forms. Includes helptext, labels and errors.
 */
const meta: Meta<typeof WrappedInput> = {
  title: 'Library/Form/Input',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedInput,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedInput>;

type FormData = {
  firstName: string;
  lastName: string;
};

const Render = (args: WrappedInputProps<FormData>) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      <WrappedInput<FormData> {...args} register={register} />
    </form>
  );
};

export const Text: Story = {
  render: (args) => Render(args as WrappedInputProps<FormData>),
  args: {
    type: 'text',
    name: 'firstName',
    label: 'First name',
  },
};
