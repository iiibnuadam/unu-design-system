import type { Meta, StoryFn } from '@nuxtjs/storybook'
import Icon from './Icon.vue'

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['Home', 'User', 'Settings', 'Logo'], // Update with your icons
    },
    size: {
      control: { type: 'range', min: 12, max: 64, step: 4 },
      defaultValue: 24,
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 4, step: 0.5 },
      defaultValue: 2,
    },
    class: {
      control: 'select',
      options: [
        'text-gray-500',
        'text-red-500',
        'text-green-500',
        'text-blue-500',
        'text-yellow-500',
        'text-purple-500',
      ],
      defaultValue: 'text-blue-500',
    },
  },
} as Meta<typeof Icon>

const Template: StoryFn<typeof Icon> = (args) => ({
  components: { Icon },
  setup() {
    return { args }
  },
  template: '<Icon v-bind="args" />',
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
        import Icon from '@/components/ui/icon'
        </script>

        <template>
            <Icon name="Home" >
        </template>
        `.trim(),
      },
    },
  },
})

export const Default = Template.bind({})
Default.args = {
  name: 'Home',
}
