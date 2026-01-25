import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Enable code splitting
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // UI components
          'ui-components': [
            './src/components/ui/Toast.tsx',
            './src/components/ui/Loading.tsx',
            './src/components/ui/ErrorBoundary.tsx',
            './src/components/ui/Accessibility.tsx',
          ],
          // Data modules
          'data': [
            './src/data/scenarios.ts',
            './src/data/slangData.ts',
          ],
        },
        // Chunk file naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    // Enable source maps for production debugging
    sourcemap: true,
    // Minification options
    minify: 'esbuild',
    // Target modern browsers for smaller bundles
    target: 'es2020',
  },
  // Enable service worker precaching in dev
  server: {
    headers: {
      'Service-Worker-Allowed': '/',
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});
