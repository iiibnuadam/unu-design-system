import type { Meta, StoryObj } from "@nuxtjs/storybook";
import { Progress } from "@/components/ui/progress";

export default {
  title: "Components/Progress",
  component: Progress,
  // tags: ["autodocs"],
  argTypes: {
    title: {
      control: 'text',
      description: 'Place label of a progress.',
    },
    labeled: {
      control: 'boolean',
      description: 'Place label of a progress.',
      defaultValue: { summary: 'false' },
    },
    floatingLabel: {
      control: 'radio',
      options: ['top', 'bottom'],
      description: 'Label floating with the number on top or bottom of the progress bar. Only show when `labeled` is active and `title` is empty.',
      if: { arg: 'labeled', eq: true },
    },
    type: {
      control: 'radio',
      options: ['default', 'steps'],
      description: 'Showing progress bar with different style.',
      defaultValue: { summary: 'default' },
    },
    modelValue: {
      control: 'number',
      description: 'The progress value. Can be bind as v-model.',
      table: {
        defaultValue: {summary: '50'}
      },
    },
  },
  args: { type: 'default', modelValue: 0, labeled: false },
} as Meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    type: 'default',
    modelValue: 50,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: `<Progress v-bind="args" />`,
  }),
};
