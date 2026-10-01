import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
  {
    files: ['**/*.js'],

    extends: [js.configs.recommended],

    languageOptions: {
      globals: {
        console: 'readonly',
      },
    },

    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  },

  eslintConfigPrettier,
]);
