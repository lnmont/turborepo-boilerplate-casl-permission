/** @type {import('eslint').Linter.Config} */
module.export = {
  extends: ['@rocketseat/eslint-config/react'],
  plugin: ['simple-import-sort'],
  rules: {
    'simples-import-sort/imports': 'error'
  }
}