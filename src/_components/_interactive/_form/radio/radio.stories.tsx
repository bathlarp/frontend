import type { Meta, StoryObj } from '@storybook/react';
import { InferType, object, string } from 'yup';

import { Form } from '../form';

import { WrappedRadio, WrappedRadioProps } from './wrappedRadio';

/**
 * A wrapped radio group for forms. Includes helptext, labels and errors.
 */
const meta: Meta<typeof WrappedRadio> = {
  title: 'Library/Interactive/Form/Radio Buttons',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedRadio,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedRadio>;

const schema = object({
  guild: string()
    .required('At least write something')
    .max(100, "Okay, that's enough."),
});

interface Guild extends InferType<typeof schema> {}

const Render = (args: WrappedRadioProps<Guild>) => {
  const onSubmit = (data: Guild) => console.log(data);
  return (
    <Form<Guild> onSubmit={onSubmit} schema={schema}>
      <WrappedRadio<Guild> {...args} />
    </Form>
  );
};

export const RadioButtons: Story = {
  render: (args) => Render(args as WrappedRadioProps<Guild>),
  args: {
    name: 'guild',
    label: 'Best Guild',
    options: [
      {
        value: 'defenders',
        label: 'The Defenders',
      },
      {
        value: 'gladiators',
        label: 'The Gladiators',
      },
    ],
  },
};
