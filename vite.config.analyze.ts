/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// Analysis build configuration - generates bundle stats
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false,
      filename: 'bundle-stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  base: '/',
  build: {
    sourcemap: true,
  },
});
