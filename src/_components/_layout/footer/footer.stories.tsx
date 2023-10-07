import { Description, Primary, Title } from '@storybook/blocks';
import type { Meta, StoryObj } from '@storybook/react';

import { Footer as FooterComp } from './footer';

/**
 * Website footer - it has no inputs. The copyright notice is self-updating.
 */
const meta: Meta<typeof FooterComp> = {
  title: 'Library/Layout/Footer',
  parameters: {
    layout: 'fullscreen',
  },
  component: FooterComp,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FooterComp>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/QcjBY56Dql5WNfVycHoWJL/BladesDB2?type=design&node-id=351-350&mode=design&t=bm04J4Iw7bzupzYH-4',
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
};
