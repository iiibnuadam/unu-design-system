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
      name: 'UnuDesignSystem'
    },
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
        'vue-sonner'
      ],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.js',
          globals: {
            vue: 'Vue',
            '@vueuse/core': 'VueUse',
            'class-variance-authority': 'CVA',
            'clsx': 'clsx',
            'tailwind-merge': 'TailwindMerge',
            'lucide-vue-next': 'LucideVue',
            'reka-ui': 'RekaUI'
          }
        },
        {
          format: 'cjs',
          entryFileNames: 'index.cjs',
          globals: {
            vue: 'Vue',
            '@vueuse/core': 'VueUse',
            'class-variance-authority': 'CVA',
            'clsx': 'clsx',
            'tailwind-merge': 'TailwindMerge',
            'lucide-vue-next': 'LucideVue',
            'reka-ui': 'RekaUI'
          }
        }
      ]
    },
    sourcemap: true,
    emptyOutDir: true
  }
})
