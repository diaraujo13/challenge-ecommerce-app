module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    'no-use-before-define': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],
    'import/extensions': ['error', 'never'],
    'react/prop-types': 0,
    'no-shadow': 'off',
    'import/no-absolute-path': [
      0,
      { esmodule: false, commonjs: false, amd: false },
    ],
    'no-param-reassign': 'warn',
    '@typescript-eslint/no-shadow': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'builtin'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};
