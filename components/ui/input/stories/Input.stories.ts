import type { Meta, StoryObj } from '@nuxtjs/storybook'
import { Input } from '@/components/ui/input'

export default {
  title: 'Components/Input',
  component: Input,
  // tags: ["autodocs"],
  argTypes: {
    label: {
      control: 'text',
      description: 'Sets input label.',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Place label of a progress.',
      defaultValue: { summary: 'default' },
    },
    variant: {
      control: 'select',
      options: ['bordered', 'underline', 'light'],
      description:
        'Label floating with the number on top or bottom of the progress bar. Only show when `labeled` is active and `title` is empty.',
      defaultValue: { summary: 'bordered' },
    },
    error: {
      control: 'boolean',
      description: 'Puts the input in a manual error state.',
      defaultValue: { summary: 'false' },
    },
    errorMessages: {
      control: 'text',
      description:
        'Puts the input in an error state and passes through custom error messages.',
    },
  },
} as Meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: { size: 'default', variant: 'bordered', error: false },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args }
    },
    template: `<Input v-bind="args" />`,
  }),
}
