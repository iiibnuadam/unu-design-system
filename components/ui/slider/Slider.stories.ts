import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { defineComponent, ref } from "vue";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    modelValue: { control: { type: "object" }, defaultValue: [50] },
    max: { control: { type: "number" }, defaultValue: 100 },
    step: { control: { type: "number" }, defaultValue: 1 },
  },
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
        import { cn } from '@/utils'
        import { Slider } from '@/components/ui/slider'
        import { ref } from 'vue'

        const modelValue = ref([50])
        </script>

        <template>
            <Slider
                v-model="modelValue"
                :max="100"
                :step="1"
                :class="cn('w-3/5', $attrs.class ?? '')"
            />
        </template>
        `.trim(),
      },
    },
  },
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) =>
  defineComponent({
    components: { Slider },
    setup() {
      const modelValue = ref(args.modelValue);
      return { modelValue, args, cn };
    },
    template: `
      <Slider
        v-model="modelValue"
        :max="args.max"
        :step="args.step"
        :class="cn('w-3/5', $attrs.class ?? '')"
      />
    `,
  });

export const Default = Template.bind({});
Default.args = {
  modelValue: [50],
  max: 100,
  step: 1,
};
