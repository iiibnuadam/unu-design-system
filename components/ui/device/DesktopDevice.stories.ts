import type { Meta, StoryObj } from '@nuxtjs/storybook'
import DesktopDevice from './DesktopDevice.vue'

export default {
  title: 'Components/Device/DesktopDevice',
  component: DesktopDevice,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL. Must be 1618px wide and 1010px tall.',
    },
    alt: { control: 'text', description: 'Image alt text.' },
    url: { control: 'text', description: 'Example URL.' },
  },
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
          import { DesktopDevice } from '@/components/ui/device/DesktopDevice'
        </script>

        <template>
          <DesktopDevice :src="https://preline.co/assets/img/1618x1010/img1.jpg" :alt="Placeholder Image" :url="www.example.com" />
        </template>
        `.trim(),
      },
    },
  },
} as Meta

export const Default: StoryObj = {
  args: {
    src: 'https://preline.co/assets/img/1618x1010/img1.jpg',
    alt: 'Placeholder Image',
    url: 'www.example.com',
  },
}
