import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    'shadcn-nuxt',
  ],
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  typescript: {
    strict: true,
  },

  // components: [
  //   {
  //     path: '~/components/ui',
  //     // this is required else Nuxt will autoImport `.ts` file
  //     extensions: ['.vue'],
  //     // prefix for your components, eg: UiButton
  //     prefix: 'Ui',
  //     pathPrefix: false,
  //   },
  // ],
})
