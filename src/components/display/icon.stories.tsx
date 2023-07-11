import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './icon';

const meta: Meta<typeof Icon> = {
  title: 'Library/Display/Icon',
  parameters: {
    layout: 'fullscreen',
  },
  component: Icon,
  render: (args) => <Icon {...args} />,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    iconName: 'account',
    fillColour: 'notice',
    strokeColour: 'error',
    classNames: 'w-5 h-5',
  },
};
