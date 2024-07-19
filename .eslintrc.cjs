module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'vite.config.ts',
    'jest.config.ts',
    'jest.setup.ts',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
  rules: {
    'import/order': ['error', { 'newlines-between': 'never' }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-explicit-any': ['error', { ignoreRestArgs: true }],
  },
}
