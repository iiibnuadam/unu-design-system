import type { Meta, StoryObj } from '@nuxtjs/storybook'
import DropdownMenu from './../DropdownMenu.vue'
import { ref } from 'vue'
import { User, Settings, LogOut } from 'lucide-vue-next'

type Story = StoryObj<typeof DropdownMenu>

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  argTypes: {
    side: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    align: { control: 'select', options: ['start', 'center', 'end'] },
  },
}

export default meta

export const Default: Story = {
  render: (args) => ({
    components: { DropdownMenu },
    setup() {
      const items = ref([
        { label: 'Profile', icon: User, value: 'profile' },
        {
          label: 'Settings',
          icon: Settings,
          value: 'settings',
          useDivider: true,
        },
        { label: 'Logout', icon: LogOut, value: 'logout' },
      ])
      return { args, items }
    },
    template: `
      <DropdownMenu v-bind="args" :items="items">
        <template #trigger>
          <button class="px-4 py-2 border rounded-md">Open Menu</button>
        </template>
      </DropdownMenu>
    `,
  }),
  args: {
    side: 'bottom',
    align: 'start',
  },
}
