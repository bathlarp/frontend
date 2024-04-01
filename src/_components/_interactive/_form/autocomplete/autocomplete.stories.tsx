import type { Meta, StoryObj } from '@storybook/react';
import { InferType, object, string } from 'yup';

import { Form } from '../form';

import {
  WrappedAutoComplete,
  WrappedAutoCompleteProps,
} from './wrappedAutocomplete';

/**
 * A wrapped AutoComplete component for forms. Includes helptext, labels and errors.
 * The form *must* include a default value for the autocomplete, but this can be
 * an empty string.
 */
const meta: Meta<typeof WrappedAutoComplete> = {
  title: 'Library/Interactive/Form/AutoComplete',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedAutoComplete,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedAutoComplete>;

const schema = object({
  guild: string(),
});

interface GuildForm extends InferType<typeof schema> {}

const Render = (args: WrappedAutoCompleteProps<GuildForm>) => {
  const onSubmit = (data: GuildForm) => console.log(data);
  return (
    <Form<GuildForm>
      onSubmit={onSubmit}
      schema={schema}
      defaultValues={{ guild: '' }}
    >
      <WrappedAutoComplete<GuildForm> {...args} />
    </Form>
  );
};

export const Default: Story = {
  render: (args) => Render(args as WrappedAutoCompleteProps<GuildForm>),
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
