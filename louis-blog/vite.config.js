import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vite_blog/', // replace with your base URL when deploying
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
    // Enable SPA fallback
    historyApiFallback: true,
  },
});
