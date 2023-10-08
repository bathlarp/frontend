import { Description, Primary, Title } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Header as HeaderComp } from './header';

/**
 * Website header - it has no inputs.
 */
const meta: Meta<typeof HeaderComp> = {
  title: 'Library/Layout/Header',
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/QcjBY56Dql5WNfVycHoWJL/BladesDB2?type=design&node-id=459-392',
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
        </>
      ),
      story: {
        height: '50px',
      },
    },
  },
  component: HeaderComp,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderComp>;

export const Default: Story = {
  args: {
    navElements: ['Events', 'Club', 'World', 'Resources'],
  },
};
