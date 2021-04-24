module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: ['@react-native-community'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: '17',
    },
  },
  env: {
    node: true,
    browser: true,
  },
  globals: {
    JSX: true,
  },
  rules: {
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-fragments': 0,
    'react/no-unused-prop-types': 0,
    'import/export': 0,
    'react-native/no-inline-styles': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'prettier/prettier': ['warn', {endOfLine: 'auto'}],
    'react/display-name': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: false,
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-debugger': 'off',
  },
};
