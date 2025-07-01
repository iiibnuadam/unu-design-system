import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Avatar from './Avatar.vue'
import AvatarFallback from './AvatarFallback.vue'
import AvatarImage from './AvatarImage.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
    shape: { control: 'select', options: ['circle', 'square'] },
    hasRing: { control: 'boolean' },
  },
  render: (args: any) => ({
    components: { Avatar, AvatarFallback, AvatarImage },
    setup() {
      return { args }
    },
    template: `
        <Avatar v-bind="args">
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
        import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
        </script>

        <template>
            <Avatar>
                <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </template>
        `.trim(),
      },
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarStory: Story = {
  args: {
    size: 'sm',
    shape: 'circle',
  },
  name: 'Avatar',
}
