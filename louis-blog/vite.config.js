import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vite_blog/', // to be replaced when we deploy to the final domain
  plugins: [react()]
});
