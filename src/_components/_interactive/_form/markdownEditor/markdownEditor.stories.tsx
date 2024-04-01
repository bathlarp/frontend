import type { Meta, StoryObj } from '@storybook/react';
import { InferType, object, string } from 'yup';

import { Form } from '../form';

import {
  WrappedMarkdownEditor,
  WrappedMarkdownEditorProps,
} from './wrappedMarkdownEditor';

/**
 * A wrapped text area for forms. Includes helptext, labels and errors.
 */
const meta: Meta<typeof WrappedMarkdownEditor> = {
  title: 'Library/Interactive/Form/Markdown Editor',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedMarkdownEditor,
  tags: ['autodocs'],
  argTypes: {},
};

const schema = object({
  essay: string()
    .required('At least write something')
    .max(100, "Okay, that's enough."),
});

interface Essay extends InferType<typeof schema> {}

export default meta;
type Story = StoryObj<typeof WrappedMarkdownEditor<Essay>>;

const Render = (args: WrappedMarkdownEditorProps<Essay>) => {
  const onSubmit = (data: Essay) => console.log(data);
  return (
    <div className="max-w-3xl p-4">
      <Form<Essay>
        onSubmit={onSubmit}
        defaultValues={{ essay: 'Nope' }}
        schema={schema}
      >
        <WrappedMarkdownEditor<Essay> {...args} />
      </Form>
    </div>
  );
};

export const MarkdownEditor: Story = {
  render: (args) => Render(args),
  args: {
    name: 'essay',
    label: 'Essay',
  },
};
