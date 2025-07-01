import type { Meta, StoryObj } from '@nuxtjs/storybook'
import { Switch } from '@/components/ui/switch'

export default {
  title: 'Components/Switch',
  component: Switch,
  // tags: ["autodocs"],
  argTypes: {
    switchSize: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Size of the switch button.',
    },
    switchThumbSize: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Size of the switch thumb.',
    },
    rightLabel: {
      control: 'text',
      description: 'Sets label on the right of the switch button.',
    },
    leftLabel: {
      control: 'text',
      description: 'Sets label on the right of the switch button.',
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with switch button.',
      defaultValue: { summary: 'false' },
    },
    required: {
      control: 'boolean',
      description:
        'When true, indicates that the user must set the value before the owning form can be submitted.',
    },
    withIcon: {
      control: 'boolean',
      description: 'Providing the additional elements such as icons.',
    },
  },
} as Meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    disabled: false,
    required: false,
  },
  render: (args) => ({
    components: { Switch },
    setup() {
      return { args }
    },
    template: `
      <Switch v-bind="args" />
    `,
  }),
}
