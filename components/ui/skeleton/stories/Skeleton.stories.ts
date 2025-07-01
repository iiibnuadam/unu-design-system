import type { Meta, StoryObj } from "@nuxtjs/storybook";
import { defineComponent } from "vue";
import { Skeleton } from "@/components/ui/skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    type: {
      control: 'select',
      options: ['avatar', 'button', 'card', 'text'],
      description: 'A string delimited list of skeleton components to create such as type="text" or type="card".',
      defaultValue: { summary: 'text' },
    },
  }
} as Meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    type: 'text',
  },
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex items-center space-x-4">
        <Skeleton type="avatar" />
        <div class="space-y-2">
          <Skeleton />
          <Skeleton class="w-[200px]" />
        </div>
      </div>`,
  }),
};
