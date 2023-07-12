import { FunctionComponent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const ColourBlocks: FunctionComponent = () => <div className='grid grid-cols-4 grid-rows-1 gap-1 p-2'>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-primary text-standout'>primary</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-primary-dark text-standout'>primary-dark</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-background text-primary-dark'>background</div>
  <div className='flex h-20 items-center justify-center rounded border border-black bg-standout text-primary-dark'>standout</div>
  <div className='flex h-20 items-center justify-center rounded border-2 border-error bg-error/10 text-error'>error</div>
  <div className='flex h-20 items-center justify-center rounded border-2 border-warning bg-warning/10 text-warning'>warning</div>
  <div className='flex h-20 items-center justify-center rounded border-2 border-success bg-success/10 text-success'>success</div>
</div>;

const meta: Meta<typeof ColourBlocks> = {
  title: 'Library/Themes',
  parameters: {
    layout: 'fullscreen',
  },
  component: ColourBlocks,
};

export default meta;
type Story = StoryObj<typeof ColourBlocks>;

export const Colours: Story = {};
