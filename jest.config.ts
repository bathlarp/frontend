import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  testMatch: ['<rootDir>/**/*.spec.(ts|tsx)'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/js-with-ts-esm',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': [
      'babel-jest',
      { tsconfig: '<rootDir>/tsconfig.eslint.json' },
    ],
    '.+\\.(svg|style|png|jpg|ttf|woff|woff2)$':
      '<rootDir>/test/__mocks__/fileMock.cjs',
  },
};
export default jestConfig;
