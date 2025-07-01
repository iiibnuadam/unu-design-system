import type { Meta, StoryObj } from '@nuxtjs/storybook'
import { Checkbox } from '@/components/ui/checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  // tags: ["autodocs"],
  argTypes: {
    label: {
      control: 'text',
      description: 'Sets checkbox label.',
    },
    description: {
      control: 'text',
      description: 'Set text under label.',
    },
    defaultValue: {
      control: 'radio',
      options: ['true', 'false', 'intermediate'],
      description:
        'The value of the checkbox when it is initially rendered. Use when you do not need to control its value.',
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with the checkbox.',
    },
    required: {
      control: 'boolean',
      description:
        'When true, indicates that the user must set the value before the owning form can be submitted.',
    },
    checked: {
      control: 'radio',
      options: ['true', 'false', 'intermediate'],
      description: 'The uncontrolled value of the checkbox.',
    },
  },
} as Meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'terms',
  },
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args }
    },
    template: `<Checkbox v-bind="args" />`,
  }),
}
