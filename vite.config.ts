import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly' // modal-content -> modalContent
    }
  },
  base: '/todo/',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve('./src') },
      { find: '@app', replacement: path.resolve('./src/app') },
      { find: '@features', replacement: path.resolve('./src/features') },
      { find: '@assets', replacement: path.resolve('./src/assets') }
    ]
  }
});
