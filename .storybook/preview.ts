import { withThemeByClassName } from '@storybook/addon-styling';
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
