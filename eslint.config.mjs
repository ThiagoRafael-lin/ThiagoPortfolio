import nextPlugin from '@next/eslint-plugin-next';
import jsPlugin from '@eslint/js';

export default [
  jsPlugin.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];
