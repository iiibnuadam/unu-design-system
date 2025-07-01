import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Calendar from './Calendar.vue' // Ensure correct import
import { getLocalTimeZone, today } from '@internationalized/date'
import { ref } from 'vue'

// Explicitly define the expected props for the Calendar component
type CalendarProps = InstanceType<typeof Calendar>['$props']

const meta: Meta<CalendarProps> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    weekdayFormat: {
      control: 'select',
      options: ['short', 'long', 'narrow'],
    },
  },
  render: (args) => ({
    components: { Calendar },
    setup() {
      const value = ref(today(getLocalTimeZone())) // Ensure it's a valid date
      return { args, value }
    },
    template: `<Calendar v-model="value" v-bind="args" class="rounded-md border" />`,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
        import { Calendar } from '@/components/ui/calendar'
        import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
        import { type Ref, ref } from 'vue'

        const value = ref(today(getLocalTimeZone())) as Ref<DateValue>
        </script>

        <template>
            <Calendar v-model="value" v-bind="args" class="rounded-md border" />
        </template>
        `.trim(),
      },
    },
  },
} satisfies Meta<CalendarProps>

export default meta
type Story = StoryObj<CalendarProps>

export const Default: Story = {
  name: 'Calendar',
  args: {
    weekdayFormat: 'short',
  }, // Ensure this matches the expected type
}
