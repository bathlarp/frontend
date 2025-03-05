import React from 'react';

import { withThemeByClassName } from '@storybook/addon-themes';
import { Title, Description, Stories, Controls } from '@storybook/blocks';
import { Preview, ReactRenderer } from '@storybook/react';

import '../src/_themes/root.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Library',
          ['Themes', 'Display', 'Interactive', 'Layout'],
        ],
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Controls />
          <Stories />
        </>
      ),
    },
  },

  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: 'light',
        dark: 'dark',
        contrast: 'contrast',
      },
      defaultTheme: 'light',
    }),
  ],

  tags: ['autodocs', 'autodocs']
};

export default preview;
