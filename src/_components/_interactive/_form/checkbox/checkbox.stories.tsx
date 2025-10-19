import type { Meta, StoryObj } from '@storybook/react';
import { array, InferType, object } from 'yup';

import { Form } from '../form';

import { WrappedCheckbox, WrappedCheckboxProps } from './wrappedCheckbox';

/**
 * A wrapped checkbox for forms. Includes helptext, labels and errors.
 */
const meta: Meta<typeof WrappedCheckbox> = {
  title: 'Library/Interactive/Form/Checkbox',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedCheckbox,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedCheckbox>;

const schema = object({
  engage: array(),
});

interface Engage extends InferType<typeof schema> {}

const Render = (args: WrappedCheckboxProps<Engage>) => {
  const onSubmit = (data: Engage) => console.log(data);
  return (
    <Form<Engage>
      onSubmit={onSubmit}
      defaultValues={{ engage: ['yes'] }}
      schema={schema}
    >
      <WrappedCheckbox<Engage> {...args} />
    </Form>
  );
};

export const Checkbox: Story = {
  render: (args) => Render(args as WrappedCheckboxProps<Engage>),
  args: {
    name: 'engage',
    label: '',
    options: [
      {
        value: 'yes',
        label: 'Yes',
      },
      {
        value: 'no',
        label: 'No',
      },
    ],
  },
};
