// eslint.config.js
import vue from 'eslint-plugin-vue'
import js from '@eslint/js'
import pluginImport from 'eslint-plugin-import'
import pluginN from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      import: pluginImport,
      n: pluginN,
      promise: pluginPromise
    },
    rules: {
      // Regras padrão do StandardJS
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'space-before-function-paren': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['warn'],
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', { singleline: 3 }],
      'vue/require-default-prop': 'off'
    }
  }
]
