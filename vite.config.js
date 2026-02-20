/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/oh-stella-website/' : '/oh-stella-website/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
