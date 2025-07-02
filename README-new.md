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

- `Button` - Customizable buttons with multiple variants
- `Input` - Text input with validation support
- `Textarea` - Multi-line text input
- `Select` - Dropdown select with search
- `Checkbox` - Checkbox input component
- `RadioGroup` - Radio button groups
- `Switch` - Toggle switch component
- `Form` - Form wrapper with validation
- `FormField` - Individual form field wrapper
- `Label` - Form labels
- `NumberField` - Numeric input field
- `PinInput` - PIN/OTP input component
- `TagsInput` - Tag input component

### Layout & Containers

- `Card` / `CardHeader` / `CardContent` / `CardFooter` - Flexible card containers
- `Sheet` / `SheetTrigger` / `SheetContent` - Sliding panels
- `Dialog` / `DialogTrigger` / `DialogContent` - Modal dialogs
- `AlertDialog` - Confirmation dialogs
- `Tabs` / `TabsList` / `TabsTrigger` / `TabsContent` - Tab navigation
- `Accordion` / `AccordionItem` / `AccordionTrigger` - Collapsible content
- `Separator` - Visual dividers
- `Sidebar` - Sidebar navigation

### Navigation

- `NavigationMenu` - Main navigation menus
- `Breadcrumb` - Breadcrumb navigation
- `Pagination` - Page navigation controls
- `MenuBar` - Menu bar component
- `DropdownMenu` - Dropdown menus
- `ContextMenu` - Right-click context menus

### Data Display

- `Table` / `TableHeader` / `TableBody` / `TableRow` / `TableCell` - Data tables
- `Avatar` / `AvatarImage` / `AvatarFallback` - User avatars
- `AvatarGroup` - Grouped avatars
- `Badge` - Status badges and labels
- `Calendar` - Date picker calendar
- `RangeCalendar` - Date range picker
- `Progress` - Progress indicators
- `Skeleton` - Loading skeletons

### Feedback & Overlays

- `Alert` / `AlertTitle` / `AlertDescription` - Alert messages
- `Tooltip` - Hover tooltips
- `Popover` / `PopoverTrigger` / `PopoverContent` - Click/hover popovers
- `Sonner` - Toast notifications

### Interactive

- `Slider` - Range sliders
- `Carousel` - Image/content carousels
- `Combobox` - Searchable select
- `Command` - Command palette
- `Stepper` - Step-by-step navigation

### Media & Graphics

- `Icon` - Icon component
- `Device` - Device mockup components
- `Blockquote` - Styled quotes

## 🚀 Quick Start Example

```vue
<template>
  <div class="p-6 max-w-md mx-auto">
    <Card>
      <CardHeader>
        <CardTitle>Welcome to UNU Design System</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <Alert>
          <AlertTitle>Getting Started</AlertTitle>
          <AlertDescription>
            You're now using UNU Design System components!
          </AlertDescription>
        </Alert>

        <div class="flex gap-2">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>

        <Badge variant="default">New Feature</Badge>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
  Badge,
} from 'unu-design-system'
</script>
```

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

For detailed component documentation and examples, visit our [Storybook](https://storybook.unu-design-system.com).

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/iiibnuadam/unu-design-system.git

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build the library
pnpm build

# Run Storybook
pnpm storybook
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About

Built by the Digital Transformation Team at UNU (Universitas Nahdlatul Ulama).

Based on:

- [shadcn/vue](https://www.shadcn-vue.com/) - Component foundation
- [Reka UI](https://www.reka-ui.com/) - Headless UI primitives
- [Preline UI](https://preline.co/) - Design inspiration

## 🔗 Links

- 📦 [NPM Package](https://www.npmjs.com/package/unu-design-system)
- 📂 [GitHub Repository](https://github.com/iiibnuadam/unu-design-system)
- 🎨 [Figma Design System](https://www.figma.com/design/ux4CTnxNTYgUpHLr0W99qL/)
- 📚 [Documentation](https://docs.unu-design-system.com)

---

**Made with ❤️ by UNU Digital Transformation Team**
