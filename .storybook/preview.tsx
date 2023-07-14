import React from 'react';

import { withThemeByClassName } from '@storybook/addon-styling';
import { Title, Description, Stories, Controls } from '@storybook/blocks';
import { Preview } from '@storybook/react';

import '../src/themes/root.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
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
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
        contrast: 'contrast',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
