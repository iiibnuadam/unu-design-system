import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { defineComponent } from "vue";
import { Label } from "@/components/ui/label";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";

export default {
  title: "Components/NumberField",
  component: NumberField,
  tags: ["autodocs"],
  argTypes: {
    min: { control: { type: "number" } },
  },
} as Meta<typeof NumberField>;

const Template: StoryFn<typeof NumberField> = (args) =>
  defineComponent({
    components: {
      Label,
      NumberField,
      NumberFieldContent,
      NumberFieldDecrement,
      NumberFieldIncrement,
      NumberFieldInput,
    },
    setup() {
      return { args };
    },
    template: `
      <NumberField v-bind="args">
        <Label :for="args.id">Age</Label>
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    `,
  });

export const Default = Template.bind({});
Default.args = {
  id: "age",
  defaultValue: 18,
  min: 0,
};
