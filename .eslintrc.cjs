/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    quotes: ['error', 'single'],
    indent: [2, 2, { SwitchCase: 1}]
  },
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  }
}
