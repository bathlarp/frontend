import type { Meta, StoryObj } from '@storybook/react';
import { InferType, object, string } from 'yup';

import { Form } from '../form';

import { WrappedTextArea, WrappedTextAreaProps } from './wrappedTextArea';

/**
 * A wrapped text area for forms. Includes helptext, labels and errors.
 */
const meta: Meta<typeof WrappedTextArea> = {
  title: 'Library/Interactive/Form/Text Area',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedTextArea,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedTextArea>;

const schema = object({
  essay: string()
    .required('At least write something')
    .max(100, "Okay, that's enough."),
});

interface Essay extends InferType<typeof schema> {}

const Render = (args: WrappedTextAreaProps<Essay>) => {
  const onSubmit = (data: Essay) => console.log(data);
  return (
    <Form<Essay>
      onSubmit={onSubmit}
      defaultValues={{ essay: 'Nope' }}
      schema={schema}
    >
      <WrappedTextArea<Essay> {...args} />
    </Form>
  );
};

export const TextArea: Story = {
  render: (args) => Render(args as WrappedTextAreaProps<Essay>),
  args: {
    name: 'essay',
    label: 'Essay',
  },
};
