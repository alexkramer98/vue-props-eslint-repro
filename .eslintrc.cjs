/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json'
  },
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": ["error"],
    "@typescript-eslint/no-unsafe-call": ["error"],
    "@typescript-eslint/no-unsafe-member-access": ["error"]
  }
}
