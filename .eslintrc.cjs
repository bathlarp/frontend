module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
  ],
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
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              '**/*.spec.ts',
              '**/*.stories.*',
              '**/*.config.*',
            ],
          },
        ],
        'import/prefer-default-export': 0,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.eslint.json'], // Specify it only for TypeScript files
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
};
