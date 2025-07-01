# Dokumentasi UNU Design System

## Intro

Unu Design System ini dibangun dari [Preline UI Design Sytem Figma](https://www.figma.com/community/file/1179068859697769656) yang telah disesuaikan.

Preline UI juga memiliki [UI component library](https://preline.co/) untuk Front End. Tailwind CSS juga digunakan untuk membangun component library ini. Tetapi, paradigma yang digunakan berbeda dengan yang biasa digunakan di Tim Transformasi Digital UNU. Kalau di Preline UI componen library FE untuk membuat component interaktif dengan inline attribute saja dan menambahkan script javascript Preline UI. Misal:

```html
<!--data-hs-accordion-always-open attribut ini digunakan untuk tetap membuka accordion item setelah diklik-->
<div class="hs-accordion-group" data-hs-accordion-always-open=""></div>
```

Jadi semacam kita tidak memiliki kontrol akan code javascript pada component accordion tersebut. Ditambah lagi stack yang digunakan oleh TIM FE Transformasi Digital UNU ini berupa Nuxt.js 2 (sekarang akan menggunakan Nuxt.js 3). Sehingga akan kurang maksimal jika menggunakan component library bawaan Preline UI.

Oleh karena itu UI component library yang digunakan adalah **shadcn/vue**. Merupakan component library yang terinspirasi dari library **shadcn** (yang berbasis tailwind css, react.js, dan radix ui). **shadcn/vue** berbasis tailwind css, Vue.js dan Reka UI .js. Library ini digunakan sebagai basis pengembangan UNU Design System karena kemudahan dalam kustomisasi dan komponen yang ready to use yang cukup lengkap

Jadi idenya dari basis komponen **shadcn/vue** ini akan dikustomisasi seperti Figma design system UNU.

### Reference

- [figma UNU Design System](https://www.figma.com/design/ux4CTnxNTYgUpHLr0W99qL/OBA---Akademik--Design-2024----UNU?t=fVyh8CtDnaLe0ODT-0): Design System UNU
- [Nuxt.js 3](https://nuxt.com/): stack utama yang digunakan untuk pengembangan project FE (Vue.js 3 dengan Composition API dan Typescript)
  - [Layer](https://nuxt.com/docs/getting-started/layers): ini digunakan untuk mengatur project structure folder di Nuxt agar lebih tertata kembali (misal: struktur folder mengikuti menggunakan DDD Domain Driven Design). Selain itu digunakan untuk mengekstens UNU Design System ke project baru
- [Tailwind css](https://tailwindcss.com/): untuk styling
- [Preline UI](https://preline.co/): base UI yang digunakan untuk membuat styling pada component
- [shadcn vue](https://www.shadcn-vue.com/): Pre-built component
- [storybook](https://storybook.js.org/): Untuk pendokumentasian component yang telah dibuat
- [pnpm](https://pnpm.io/): Package manager yang digunakan

## Cara Menggunakan di Project Baru

1. [Install nuxt 3 + tailwind + shadcn vue](https://www.shadcn-vue.com/docs/installation/nuxt.html)
2. Mendapatkan [Gitlab Personal Access Token](https://docs.gitlab.com/user/profile/personal_access_tokens)
3. Setup di project nuxt 3 baru

   - environment variables (.env)

     buat gitlab personal access token, kemudian masukkan ke environment variable ini

     ```
       GITLAB_PERSONAL_ACCESS_TOKEN=glpat-secret_secret
     ```

   - Extend UNU Design System

     - Extend project unu design system menggunakan config extends seperti code berikut pada `nuxt.config.ts` bagian `extends`

       ```ts
       // nuxt.config.ts
       ...
       export default defineNuxtConfig({
           compatibilityDate: "2024-11-01",
           // untuk mengekstens repo unu design system ke project
           extends: [
               [
                   "gitlab:transformasidigitalunuy/unu-design-system",
                   {
                       install: true,
                       auth: process.env.GITLAB_PERSONAL_ACCESS_TOKEN,
                   },
               ],
           ],
           ...
       ```

     - Jalankan terlebih dahulu `pnpm install` maka nuxt akan mengekstens UNU Design System repo ke project baru kita
       ```bash
       > nuxt-app@ postinstall /Users/abdulbasithb/project/unu/oba-fe/node_modules/.c12/gitlab_transformasidigitalunuy_unu_Mfc6pklfVM
       ```
     - Lalu tambahkan pengaturan ini di `nuxt.config.ts` bagian `components`
       ```ts
         // nuxt.config.ts
         ...
         // Set Prefix Unu Design System
         components: [
             {
                 path: "~/components",
                 pathPrefix: false,
             },
             {
                 // sesuaikan dengan yang didapat saat pnpm install tadi
                 path: "node_modules/.c12/gitlab_transformasidigitalunuy_unu_Mfc6pklfVM/components/ui",
                 extensions: [".vue"],
                 prefix: "Ui",
                 pathPrefix: false,
             },
         ],
         ...
       ```
       Prefix ini nantinya digunakan seperti berikut ini `<UiButton variant="unu">Ini Button</UiButton>` agar tidak terjadi bentrok antara component pada project terbaru saat ini dengan extended component dari UNU Design System serta untuk memudahkan component mana yang berasal dari UNU Design System
     - tailwind.css

       tailwind yang digunakan merupakan tailwind 4. sehingga tidak menggunakan tailwind.config.ts. Agar extended component UNU Design System dapat teraplikasi stylingnya maka diperlukan code seperti ini di tailwind.css. Kode ini berfungsi untuk menginstruksikan tailwind agar mengaplikasikan juga styling saat dev server jalan di file extended UNU Design System.

       ```css
       @source "../../node_modules/.c12/gitlab_transformasidigitalunuy_unu_Mfc6pklfVM/components";
       @import '../../node_modules/.c12/gitlab_transformasidigitalunuy_unu_Mfc6pklfVM/assets/css/tailwind.css';
       /*Sesuaikan dengan posisi path UNU Design System saat pnpm install tadi*/
       ```

     - Memulai menggunakan component

       ```vue
       <UiButton variant="unu">Ini Button</UiButton>
       ```

## Cara Berkontribusi

- task distribution https://docs.google.com/spreadsheets/d/1V4-pbFNpwN3kZE40_mLME1J0DBvu_Tb9gStJHPQZEss/edit?gid=0#gid=0
- git flow
  - buat branch feat/nama-branch atau fix/nama-branch
  - buat MR ke master

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash

# npm

npm  install



# pnpm

pnpm  install



# yarn

yarn  install



# bun

bun  install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash

# npm

npm  run  dev



# pnpm

pnpm  dev



# yarn

yarn  dev



# bun

bun  run  dev

```

## Production

Build the application for production:

```bash

# npm

npm  run  build



# pnpm

pnpm  build



# yarn

yarn  build



# bun

bun  run  build

```

Locally preview production build:

```bash

# npm

npm  run  preview



# pnpm

pnpm  preview



# yarn

yarn  preview



# bun

bun  run  preview

```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
