import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5200,
  },
  optimizeDeps: {
    exclude: ['react-router', 'react-router-dom'],
  },
  resolve: {
    alias: {
      'react-router': '/dev/null', 
      'react-router-dom': '/dev/null',
    },
  },
});