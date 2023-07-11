import { withThemeByClassName } from '@storybook/addon-styling';

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
      order: ['Themes', 'Display', 'Interactive', 'Layout']
    }
  }
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
