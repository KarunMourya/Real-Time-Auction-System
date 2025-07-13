import { defineConfig } from 'eslint/config';

export default defineConfig({
  files: ['**/*.js'],
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    globals: {
      console: 'readonly',
      process: 'readonly',
      __dirname: 'readonly'
    }
  },
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'eqeqeq': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }]
  }
});
