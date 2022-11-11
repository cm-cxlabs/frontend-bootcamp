/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react(), svgrPlugin(), tsconfigPaths()],
  server: {
    host: true,
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      timers: 'rollup-plugin-node-polyfills/polyfills/timers',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './.vitest/setup.ts',
    css: true,
    testTimeout: 60_000,
    hookTimeout: 60_000,
    exclude: [...configDefaults.exclude],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
    },
  },
});
