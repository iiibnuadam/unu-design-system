import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { defineComponent, ref } from "vue";
import type { DateRange } from "reka-ui";
import { RangeCalendar } from "@/components/ui/range-calendar";
import { getLocalTimeZone, today } from "@internationalized/date";

export default {
  title: "Components/RangeCalendar",
  component: RangeCalendar,
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = () =>
  defineComponent({
    components: { RangeCalendar },
    setup() {
      const start = today(getLocalTimeZone());
      const end = start.add({ days: 7 });

      const value = ref<DateRange>({ start, end });

      return { value };
    },
    template: `<RangeCalendar v-model="value" class="rounded-md border" />`,
  });

export const Default = Template.bind({});
