import type { Meta, StoryObj } from "@nuxtjs/storybook"
import { Select } from '@/components/ui/select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    modelValue: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    firstLabel: { control: 'text' },
    items: { control: 'object' },
    text: { control: 'text' },
    value: { control: 'text' },
    hideBorderLeft: { control: 'boolean' },
    placeholderClass: { control: 'text' },
    triggerClass: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    modelValue: '',
    id: 'select-example',
    name: 'select',
    placeholder: 'Select a fruit',
    firstLabel: 'Fruits',
    items: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'blueberry', label: 'Blueberry' },
      { value: 'grapes', label: 'Grapes' },
      { value: 'pineapple', label: 'Pineapple' },
    ],
    text: 'label',
    value: 'value',
    hideBorderLeft: false,
    placeholderClass: 'font-bold',
    triggerClass: 'w-[180px]',
  },
};

export const WithoutBorderLeft: Story = {
  args: {
    ...Default.args,
    hideBorderLeft: true,
  },
};
