module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:jsx-a11y/recommended', 'plugin:eslint-comments/recommended', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    'eslint-comments/no-use': ['error', {
      allow: ['eslint-disable-next-line']
    }],
    'eslint-comments/require-description': ['error']
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React',
      // Pragma to use, default to "React"
      fragment: 'Fragment',
      // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect',
      // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: '0.53' // Flow version

    },
    propWrapperFunctions: [// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
    ],
    componentWrapperFunctions: [// The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
    ],
    formComponents: [// Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
    ],
    linkComponents: [// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
    ]
  }
};