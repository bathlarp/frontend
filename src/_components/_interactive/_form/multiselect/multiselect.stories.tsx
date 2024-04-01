import type { Meta, StoryObj } from '@storybook/react';
import { array, InferType, object, string } from 'yup';

import { Form } from '../form';

import {
  WrappedMultiselect,
  WrappedMultiselectProps,
} from './wrappedMultiselect';

/**
 * A wrapped Multiselect component for forms. Includes helptext, labels and errors.
 * The form *must* include a default value for the multiselect, but this can be an
 * empty array.
 */
const meta: Meta<typeof WrappedMultiselect> = {
  title: 'Library/Interactive/Form/Multiselect',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedMultiselect,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedMultiselect>;

const schema = object({
  guild: array().of(string()),
});

interface GuildForm extends InferType<typeof schema> {}

const Render = (args: WrappedMultiselectProps<GuildForm>) => {
  const onSubmit = (data: GuildForm) => console.log(data);
  return (
    <Form<GuildForm>
      onSubmit={onSubmit}
      schema={schema}
      defaultValues={{ guild: [] }}
    >
      <WrappedMultiselect<GuildForm> {...args} />
    </Form>
  );
};

export const Default: Story = {
  render: (args) => Render(args as WrappedMultiselectProps<GuildForm>),
  args: {
    name: 'guild',
    label: 'Guild',
    options: [
      {
        value: 'defenders',
        label: 'The Defenders',
      },
      {
        value: 'temples',
        label: 'The Temples',
        disabled: true,
      },
      {
        value: 'templeoflife',
        label: 'The Temple of Life',
      },
      {
        value: 'brethren',
        label: 'The Brethren',
      },
    ],
  },
};
