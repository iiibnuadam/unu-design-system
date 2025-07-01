import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'), // Ensure '@/' resolves to the root of the project
    },
  },
  test: {
    setupFiles: './test/setup.ts',
    globals: true,
    environment: 'jsdom', // Required for DOM-based testing
  },
})
