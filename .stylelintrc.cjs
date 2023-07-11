module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-config-prettier-scss',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
    "function-no-unknown": null,
    "scss/function-no-unknown": [
      true,
      {
        ignoreFunctions: ['theme']
      }
    ]
  },
};
