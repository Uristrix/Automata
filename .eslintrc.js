// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
  ],
  plugins: [
    'react',
    'prettier',
    'jsx-a11y',
    'optimize-regex',
    'sonarjs',
    'no-loops',
    'no-use-extend-native',
    'promise',
    'jest',
    '@typescript-eslint',
  ],
  rules: {
    'no-extra-boolean-cast': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto', trailingComma: 'all' }],
  },
};
