import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Library/Interactive/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Text to display on the button.',
    },
    type: {
      description: 'HTML function of the button. Uses `Button` as the default.',
    },
    iconName: {
      description: 'An optional icon to show on the button.',
    },
    ariaLabel: {
      description:
        'Accessible label for the button in the case that it is not inferable.',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    label: 'Primary',
    theme: 'primary',
  },
};

export const PrimaryIconButton: Story = {
  args: {
    label: 'Primary',
    theme: 'primary',
    iconName: 'gm',
  },
};

export const SecondaryButton: Story = {
  args: {
    label: 'Secondary',
    theme: 'secondary',
  },
};

export const SecondaryIconButton: Story = {
  args: {
    label: 'Secondary',
    theme: 'secondary',
    iconName: 'gm',
  },
};

export const ButtonClicked: Story = {
  args: {
    label: 'Primary',
    theme: 'primary',
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await userEvent.click(button);

    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};
