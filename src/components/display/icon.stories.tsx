import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './icon';
import { IconName, iconsMap } from './icon.types';

/**
 * A controlled Icon component that allows the user to choose from a pre-defined set
 * and apply standard colours.
 *
 * The underlying library is [RemixIcon](https://remixicon.com/).
 */
const meta: Meta<typeof Icon> = {
  title: 'Library/Display/Icon',
  parameters: {
    layout: 'fullscreen',
  },
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      description: 'The icon you want to display from the standard list.',
    },
    strokeColour: {
      description: 'The colour of the SVG outlines from the standard colour list - unless you want an outlines-only icon, leave this to default to `none`.',
    },
    fillColour: {
      description: 'The main colour of the SVG icon from the standard colours list.',
    },
    title: {
      description: 'An optional alternative title to the default.',
    },
    incTitle: {
      description: 'A switch to optionally include a title. For accessibility, you should do this whenever an icon isn\'t part of a button etc.',
    },
    classes: {
      description: 'Any extra classes you might want to apply on top of the built-in ones, like sizing or drop-shadows.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const SingleIcon: Story = {
  args: {
    fillColour: 'primary-dark',
    iconName: 'account',
    classes: 'h-10',
  },
  render: (args) => <Icon {...args} />,
};

export const AllIcons: Story = {
  args: {
    fillColour: 'primary-dark',
  },
  argTypes: {
    iconName: {
      table: {
        disable: true,
      },
    },
    classes: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/QcjBY56Dql5WNfVycHoWJL/BladesDB2?type=design&node-id=413-360&mode=design&t=wxGw4FaPTG5FPA40-4',
    },
  },
  render: (args) => {
    const { iconName, ...colourArgs } = args;

    const iconNames = Object.keys(iconsMap);

    return <div className='grid grid-flow-row grid-cols-3 gap-2 p-2 md:w-1/2'>
      {iconNames.map((icon) => <div className='flex items-center' key={icon}>
        <Icon iconName={icon as IconName} {...colourArgs} classes='h-5' />
        <span className='pl-2'>{icon}</span>
      </div>)}
    </div>;
  },
};
