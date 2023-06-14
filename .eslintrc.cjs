module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 2022,
  },
  extends: [
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:tailwindcss/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ['simple-import-sort'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'eslint-comments/no-use': [
      'warn',
      {
        allow: ['eslint-disable-next-line'],
      },
    ],
    'eslint-comments/require-description': ['error'],
    'sort-imports': 0,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|components)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$'],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.cjs', '*.ts', '*.tsx'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.ts', '**/*.stories.*', '**/*.config.*'] }],
        'import/prefer-default-export': 0,
      },
    },
    {
      files: ['**/*.stories.*'],
      extends: ['plugin:storybook/recommended'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
    {
      files: ['*.mdx', '*.md'],
      extends: 'plugin:mdx/recommended',
      settings: {
        'mdx/code-blocks': true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
      jest: true,
    },
    react: {
      createClass: 'createReactClass',
      // Regex for Component Factory to use,
      // default to 'createReactClass'
      pragma: 'React',
      // Pragma to use, default to 'React'
      fragment: 'Fragment',
      // Fragment to use (may be a property of <pragma>), default to 'Fragment'
      version: 'detect',
      // React version. 'detect' automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to 'latest' and warn if missing, and to 'detect' in the future
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`.
      // If this isn't set, any propTypes wrapped in a function will be skipped.
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function.
      // If this isn't set, components wrapped by these functions will be skipped.
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
    ],
  },
};
