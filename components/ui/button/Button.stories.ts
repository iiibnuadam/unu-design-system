import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Button from './Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
        'unu',
      ],
    },
    size: { control: 'select', options: ['default', 'sm', 'lg', 'icon'] },
    class: { control: 'text' },
    isLoading: { control: 'boolean' },
  },
  render: (args: any) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">Button</Button>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `
          <script setup lang="ts">
          import { Button } from '@/components/ui/button'
          </script>

          <template>
            <Button>Button</Button>
          </template>
        `.trim(),
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultButton: Story = {
  args: {
    variant: 'default',
  },
}

export const DestructiveButton: Story = {
  args: { variant: 'destructive' },
}

export const OutlineButton: Story = {
  args: { variant: 'outline' },
}

export const SecondaryButton: Story = {
  args: { variant: 'secondary' },
}

export const GhostButton: Story = {
  args: { variant: 'ghost' },
}

export const LinkButton: Story = {
  args: { variant: 'link' },
}

export const LoadingButton: Story = {
  args: { isLoading: true },
}
