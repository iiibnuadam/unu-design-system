import type { Meta, StoryObj } from '@nuxtjs/storybook'
import MobileDevice from './MobileDevice.vue'

export default {
  title: 'Components/Device/MobileDevice',
  component: MobileDevice,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL. Must be 280px wide and 560px tall.',
    },
    alt: { control: 'text', description: 'Image alt text.' },
  },
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
          import { MobileDevice } from '@/components/ui/device/MobileDevice'
        </script>

        <template>
          <MobileDevice :src="https://preline.co/assets/img/1618x1010/img1.jpg" :alt="Placeholder Image" />
        </template>
        `.trim(),
      },
    },
  },
} as Meta

export const Default: StoryObj = {
  args: {
    src: 'https://preline.co/assets/img/280x560/img1.jpg',
    alt: 'Placeholder Image',
  },
}
