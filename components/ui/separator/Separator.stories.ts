import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { defineComponent } from "vue";
import { Separator } from "@/components/ui/separator";

export default {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = () =>
  defineComponent({
    components: { Separator },
    template: `
      <div>
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">
            Radix Primitives
          </h4>
          <p class="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator class="my-4" label="Or" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    `,
  });

export const Default = Template.bind({});
