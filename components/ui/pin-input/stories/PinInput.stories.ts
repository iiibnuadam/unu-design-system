import type { Meta, StoryObj } from "@nuxtjs/storybook"
import { PinInput } from '@/components/ui/pin-input'

const meta: Meta<typeof PinInput> = {
  title: 'Components/PinInput',
  component: PinInput,
  argTypes: {
    modelValue: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    mask: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: { control: { type: 'radio' }, options: ['text', 'number'] },
    gray: { control: 'boolean' },
    length: { control: { type: 'number', min: 1, max: 10 } },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof PinInput>;

export const Default: Story = {
  args: {
    modelValue: '',
    id: 'pin-input',
    label: 'Enter PIN',
    length: 6,
  },
};

export const Masked: Story = {
  args: {
    ...Default.args,
    mask: true,
  },
};

export const GrayVariant: Story = {
  args: {
    ...Default.args,
    gray: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const CustomLength: Story = {
  args: {
    ...Default.args,
    length: 4,
  },
};
