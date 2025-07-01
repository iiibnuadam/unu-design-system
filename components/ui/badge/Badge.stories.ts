import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Badge from './Badge.vue'
import type { BadgeVariants } from '.'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'], // Adjust based on your `badgeVariants`
    },
    class: {
      control: 'text',
    },
  },
  render: (args) => ({
    components: { Badge },
    setup() {
      return { args }
    },
    template: `<Badge v-bind="args">Badge</Badge>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
        import { Badge } from '@/components/ui/badge'
        </script>

        <template>
            <Badge>Badge</Badge>
        </template>
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultBadge: Story = {
  args: {
    variant: 'default',
  },
}

export const SecondaryBadge: Story = {
  args: {
    variant: 'secondary',
  },
}

export const DestructiveBadge: Story = {
  args: {
    variant: 'destructive',
  },
}

export const OutlineBadge: Story = {
  args: {
    variant: 'outline',
  },
}
