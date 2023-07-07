import { FunctionComponent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const ColourBlocks: FunctionComponent = () => <div className='grid grid-cols-4 grid-rows-1 gap-1 p-2'>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-primary text-black'>primary</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-primary-dark text-black'>primary-dark</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-background text-black'>background</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-standout text-black'>standout</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-error text-black'>error</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-warning text-black'>warning</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-success text-black'>success</div>
</div>;

const meta: Meta<typeof ColourBlocks> = {
  title: 'Themes',
  parameters: {
    layout: 'fullscreen',
  },
  component: ColourBlocks,
};

export default meta;
type Story = StoryObj<typeof ColourBlocks>;

export const Colours: Story = {};
