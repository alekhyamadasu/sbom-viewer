import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5200,
  },
  resolve: {
    alias: {
      'react/jsx-runtime': path.resolve('./node_modules/react/jsx-runtime.js'),
    },
  },
});
