import type { Meta, StoryObj } from '@storybook/react';

import { WrappedMarkdown } from './wrappedMarkdown';

/**
 * Markdown converter for display - includes CommonMark and GFM.
 */
const meta: Meta<typeof WrappedMarkdown> = {
  title: 'Library/Display/Markdown',
  parameters: {
    layout: 'fullscreen',
  },
  component: WrappedMarkdown,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WrappedMarkdown>;

export const Markdown: Story = {
  args: {
    text: `Some *basic* text _with_ markdown and ~GFM~ styles.
|This|is|a|basic|table|
|-|-|-|-|-|
|Stuff|Stuff|Stuff|Stuff|Stuff|
|Stuff|Stuff|Stuff|Stuff|Stuff|
|Stuff|Stuff|Stuff|Stuff|Stuff|
|Stuff|Stuff|Stuff|Stuff|Stuff|`,
  },
};
