import type { Meta, StoryObj } from '@nuxtjs/storybook'
import AvatarGroup from './AvatarGroup.vue'
import Avatar from '../avatar/Avatar.vue'
import AvatarImage from '../avatar/AvatarImage.vue'
import AvatarFallback from '../avatar/AvatarFallback.vue'

const meta = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    class: { control: 'text' },
  },
  render: (args: any) => ({
    components: { AvatarGroup, Avatar, AvatarImage, AvatarFallback },
    setup() {
      return { args }
    },
    template: `
      <AvatarGroup v-bind="args">
        <Avatar hasRing="true">
          <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar hasRing="true">
          <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
        import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
        import { AvatarGroup } from '@/components/ui/avatar-group'
        </script>

        <template>
            <AvatarGroup>
                <Avatar hasRing="true">
                    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar hasRing="true">
                    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </AvatarGroup>
        </template>
        `.trim(),
      },
    },
  },
} satisfies Meta<typeof AvatarGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    class: '',
  },
  name: 'Avatar Group',
}
