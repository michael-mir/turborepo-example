const fs = require('fs');
const path = require('path');

const tsConfig = fs.existsSync('tsconfig.json') ? path.resolve('tsconfig.json') : undefined;

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true }
  },
  env: { es2021: true, browser: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: tsConfig
      }
    }
  ],
  rules: {
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
    'consistent-return': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          {
            group: 'builtin',
            pattern: 'react',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always'
      }
    ],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreTemplateLiterals: true
      }
    ],
    'no-shadow': 'warn',
    'no-param-reassign': 'warn',
    'no-restricted-exports': 'off',
    'no-template-curly-in-string': 'off',
    'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    'react/prop-types': 'off',
    'react/jsx-indent': 'off',
    'react/button-has-type': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'warn',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/function-component-definition': [
      'error',
      { namedComponents: ['arrow-function'], unnamedComponents: 'arrow-function' }
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'off',
    'eslint-comments/no-unlimited-disable': 'warn',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off'
  }
};
