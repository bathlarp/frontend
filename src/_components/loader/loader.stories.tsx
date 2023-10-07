import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './loader';

/**
 * A generic loader to cover data loading etc. with a small delay on load
 * and unload to avoid flickering.
 * Can be used as a whole-screen blocking overlay or on its own.
 */
const meta: Meta<typeof Loader> = {
  title: 'Library/Display/Loader',
  parameters: {
    layout: 'fullscreen',
  },
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    fillColour: {
      description:
        'The main colour of the loader from the standard colours list.',
    },
    overlay: {
      description: 'Does the loader include a full-page blocking overlay?',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Overlay: Story = {
  args: {
    fillColour: 'primary-dark',
    overlay: true,
  },
};

export const NoOverlay: Story = {
  args: {
    fillColour: 'primary-dark',
    overlay: false,
  },
};
