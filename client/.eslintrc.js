module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', 'sonarjs'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  rules: {
    'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
    'arrow-body-style': 'warn',
    'react/display-name': 'off',
    'react/state-in-constructor': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-state': 'off',
    'react/destructuring-assignment': ['off'],
    'linebreak-style': 'off',
    'prettier/prettier': ['error'],
    'react/prefer-stateless-function': ['off'],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'sonarjs/no-duplicated-branches': 'off',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'sonarjs/cognitive-complexity': ['error', 26],
    'no-unused-vars': ['warn'],
    'react/prop-types': ['warn'],
    'import/no-deprecated': 'warn',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
  },
};
