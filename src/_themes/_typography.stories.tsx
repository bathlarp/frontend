import { FunctionComponent } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const TextBlocks: FunctionComponent = () => (
  <div className="grid-rows-7 grid grid-cols-1">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Paragraph</p>
    <a href="">Link</a>
    <label>Label</label>
    <p className="text-sm font-bold text-error">Error text</p>
  </div>
);

const meta: Meta<typeof TextBlocks> = {
  title: 'Library/Themes',
  parameters: {
    layout: 'fullscreen',
  },
  component: TextBlocks,
};

export default meta;
type Story = StoryObj<typeof TextBlocks>;

export const Typography: Story = {};
