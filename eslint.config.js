import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierConfig from 'eslint-config-prettier'

export default [
  // Apply to TypeScript and JavaScript files
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: [
      'node_modules/**',
      'public/**',
      '.cache/**',
      '*.config.js',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // Base ESLint rules
      ...js.configs.recommended.rules,
      
      // TypeScript specific rules
      ...tsPlugin.configs.recommended.rules,
      
      // Prettier compatibility
      ...prettierConfig.rules,
      
      // Custom rules for React/Gatsby
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
]
