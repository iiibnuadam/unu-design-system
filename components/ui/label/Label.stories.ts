import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default {
  title: "Components/Label",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export const Default: StoryFn<typeof Checkbox> = () => ({
  components: { Checkbox, Label },
  template: `
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label for="terms">Accept terms and conditions</Label>
    </div>
  `,
});
