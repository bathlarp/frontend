import React from 'react';

import { withThemeByClassName } from '@storybook/addon-styling';
import { Title, Description, Stories, Controls} from '@storybook/blocks';

import '../src/themes/root.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Themes', 'Display', 'Interactive', 'Layout'],
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
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
      contrast: 'contrast'
    },
    defaultTheme: 'light',
  }),
];
