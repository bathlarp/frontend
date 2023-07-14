import type { Meta, StoryObj } from '@storybook/react';

import { Footer as FooterComp } from './footer';

const meta: Meta<typeof FooterComp> = {
  title: 'Library/Layout',
  parameters: {
    layout: 'fullscreen',
  },
  component: FooterComp,
};

export default meta;
type Story = StoryObj<typeof FooterComp>;

export const Footer: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/QcjBY56Dql5WNfVycHoWJL/BladesDB2?type=design&node-id=351-350&mode=design&t=bm04J4Iw7bzupzYH-4',
    },
  },
};
