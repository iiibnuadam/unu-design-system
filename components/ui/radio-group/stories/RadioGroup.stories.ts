import type { Meta, StoryObj } from '@nuxtjs/storybook'
import { RadioGroup } from '@/components/ui/radio-group'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  // tags: ["autodocs"],
  argTypes: {
    dir: {
      control: 'radio',
      options: ['ltr', 'rtl'],
      description:
        'The reading direction of the combobox when applicable. If omitted, inherits globally from ConfigProvider or assumes LTR (left-to-right) reading mode.',
    },
    defaultValue: {
      control: 'text',
      description:
        'The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items.',
    },
    disabled: {
      control: 'boolean',
      description:
        'When true, prevents the user from interacting with radio items.',
      defaultValue: { summary: 'false' },
    },
    required: {
      control: 'boolean',
      description:
        'When true, indicates that the user must set the value before the owning form can be submitted.',
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the component',
    },
  },
} as Meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    defaultValue: 'default',
  },
  render: (args) => ({
    components: { RadioGroup },
    setup() {
      return { args }
    },
    template: `
    <RadioGroup v-bind="args">
      <RadioGroupItem id="r1" value="default" label="Default" />
      <RadioGroupItem id="r2" value="comfortable" label="Comfortable" />
      <RadioGroupItem id="r3" value="compact" label="Compact" />
    </RadioGroup>
    `,
  }),
}
