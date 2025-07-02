// vite.config.ts
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname), // agar @/lib/utils resolve
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'UnuDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => format === 'es' ? 'index.js' : 'index.cjs'
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        'vue',
        '@vueuse/core',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'lucide-vue-next',
        'reka-ui',
        '@tanstack/vue-table',
        'embla-carousel-vue',
        'vue-sonner',
        '@formkit/auto-animate',
        '@hugeicons/vue',
        '@internationalized/date',
        'embla-carousel',
        'vee-validate',
        'zod'
      ],
      output: {
        globals: {
          vue: 'Vue',
          '@vueuse/core': 'VueUse',
          'class-variance-authority': 'CVA',
          'clsx': 'clsx',
          'tailwind-merge': 'TailwindMerge',
          'lucide-vue-next': 'LucideVue',
          'reka-ui': 'RekaUI'
        },
        assetFileNames: (assetInfo) => {
          // Skip favicon and robots.txt
          if (assetInfo.name === 'favicon.ico' || assetInfo.name === 'robots.txt') {
            return '';
          }
          return '[name].[ext]';
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  }
})
