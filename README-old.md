# UNU Design System

A comprehensive Vue.js component library built with TypeScript, Tailwind CSS, and modern best practices.

## 🚀 Features

- **281+ Components**: Complete set of UI components for modern web applications
- **TypeScript**: Full TypeScript support with detailed type definitions
- **Vue 3**: Built for Vue 3 with Composition API
- **Tailwind CSS**: Styled with Tailwind CSS for easy customization
- **Tree Shakeable**: Import only what you need
- **SSR Ready**: Works with Nuxt.js and other Vue frameworks
- **Accessible**: Built with accessibility in mind
- **Modern**: Uses latest Vue ecosystem libraries

## 📦 Installation

```bash
npm install unu-design-system
# or
yarn add unu-design-system
# or
pnpm add unu-design-system
```

## 🛠️ Usage

### Basic Import

```vue
<template>
  <div>
    <Button variant="primary">Click me</Button>
    <Alert>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>Your operation was successful.</AlertDescription>
    </Alert>
  </div>
</template>

<script setup>
import { Button, Alert, AlertTitle, AlertDescription } from 'unu-design-system'
</script>
```

### With Auto-Import (Nuxt.js)

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxt/auto-imports'],
  autoImports: {
    imports: [
      {
        from: 'unu-design-system',
        names: ['Button', 'Alert', 'Card' /* ... other components */],
      },
    ],
  },
})
```

## 📚 Available Components

### Form Components

- `Button` - Customizable button component
- `Input` - Text input with validation
- `Textarea` - Multi-line text input
- `Select` - Dropdown select component
- `Checkbox` - Checkbox input
- `RadioGroup` - Radio button group
- `Switch` - Toggle switch
- `Form` - Form wrapper with validation

### Layout Components

- `Card` - Flexible card container
- `Sheet` - Sliding panel component
- `Dialog` - Modal dialog
- `Drawer` - Slide-out drawer
- `Tabs` - Tab navigation
- `Accordion` - Collapsible content

### Navigation

- `NavigationMenu` - Main navigation
- `Breadcrumb` - Breadcrumb navigation
- `Pagination` - Page navigation
- `Sidebar` - Side navigation panel

### Data Display

- `Table` - Data table with sorting
- `Avatar` - User avatar component
- `Badge` - Status badges
- `Calendar` - Date picker calendar
- `Progress` - Progress indicators

### Feedback

- `Alert` - Alert messages
- `Tooltip` - Hover tooltips
- `Popover` - Click/hover popovers
- `Sonner` - Toast notifications

And many more! See [full component list](#components) below.

## 🎨 Styling

UNU Design System uses Tailwind CSS. Make sure you have Tailwind CSS installed in your project:

```bash
npm install tailwindcss
```

Add the component styles to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  content: [
    './node_modules/unu-design-system/**/*.{js,vue,ts}',
    // your app content
  ],
  // ... rest of your config
}
```

## 🔧 TypeScript Support

The library includes comprehensive TypeScript definitions. No additional setup required!

```ts
import type { ButtonProps } from 'unu-design-system'
```

## 📖 Documentation

For detailed component documentation and examples, visit our [Storybook](your-storybook-url).

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About

Built by the Digital Transformation Team at UNU (Universitas Nahdlatul Ulama).

Based on:

- [shadcn/vue](https://www.shadcn-vue.com/) - Component foundation
- [Reka UI](https://www.reka-ui.com/) - Headless UI primitives
- [Preline UI](https://preline.co/) - Design inspiration

---

## Components

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
