import type { Meta, StoryObj } from '@storybook/react';
import { InferType, object, string } from 'yup';

import { Form } from '../form';

import { WrappedSelect, WrappedSelectProps } from './wrappedSelect';

/**
 * A wrapped select component for forms. Includes helptext, labels and errors.
 */
const meta: Meta<typeof WrappedSelect> = {
  title: 'Library/Interactive/Form/Select',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedSelect,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedSelect>;

const schema = object({
  guild: string().required("I know in theory they're optional, but..."),
});

interface GuildForm extends InferType<typeof schema> {}

const Render = (args: WrappedSelectProps<GuildForm>) => {
  const onSubmit = (data: GuildForm) => console.log(data);
  return (
    <Form<GuildForm> onSubmit={onSubmit} schema={schema}>
      <WrappedSelect<GuildForm> {...args} />
    </Form>
  );
};

export const Select: Story = {
  render: (args) => Render(args as WrappedSelectProps<GuildForm>),
  args: {
    name: 'guild',
    label: 'Guild',
    options: [
      {
        label: 'No groups',
        options: [
          {
            value: '',
            label: '',
          },
          {
            value: 'defenders',
            label: 'The Defenders',
          },
          {
            value: 'temples',
            label: 'The Temples',
            className: 'font-bold',
            disabled: true,
          },
          {
            value: 'templeoflife',
            label: 'The Temple of Life',
          },
          {
            value: 'brethren',
            label: 'The Brethren',
            className: 'text-red-600',
          },
        ],
      },
    ],
  },
};

export const SelectWithGroups: Story = {
  render: (args) => Render(args as WrappedSelectProps<GuildForm>),
  args: {
    name: 'guild',
    label: 'Guild',
    options: [
      {
        label: 'The Defenders',
        options: [
          {
            value: 'guards',
            label: 'The Guards',
          },
          {
            value: 'pathfinders',
            label: 'The Pathfinders',
          },
          {
            value: 'wardens',
            label: 'The Wardens',
          },
          {
            value: 'archers',
            label: 'The Archers',
          },
        ],
      },
      {
        label: 'Misc.',
        options: [
          {
            value: 'gladiators',
            label: 'The Gladiators',
          },
          {
            value: 'druids',
            label: 'The Druids',
          },
          {
            value: 'bladesingers',
            label: 'The Bladesingers',
          },
          {
            value: 'paladins',
            label: 'The Paladins',
          },
        ],
      },
    ],
  },
};
