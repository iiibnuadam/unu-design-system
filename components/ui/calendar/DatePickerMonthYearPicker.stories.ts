import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { CalendarMonthYearPicker } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  DateFormatter,
  getLocalTimeZone,
  type DateValue,
} from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import type { Meta, StoryObj } from '@nuxtjs/storybook'

const code = 
`<script setup lang="ts">
import { cn } from '@/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const df = new DateFormatter('en-US', { dateStyle: 'long' })
const value = ref<DateValue>()
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')"
      >
        <CalendarIcon class="mr-2 h-4 w-4" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-auto p-0">
      <CalendarMonthYearPicker v-model="value" initial-focus />
    </PopoverContent>
  </Popover>
</template>`

const meta: Meta = {
  title: 'Components/DatePickerMonthYearPicker',
  component: CalendarMonthYearPicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code,
      },
    },
  },
}

export default meta

type Story = StoryObj

export const Default: Story = {
  render: () => ({
    components: {
      Button,
      CalendarMonthYearPicker,
      Popover,
      PopoverContent,
      PopoverTrigger,
      CalendarIcon,
    },
    setup() {
      const df = new DateFormatter('en-US', { dateStyle: 'long' })
      const value = ref<DateValue>()
      return { df, value, cn, getLocalTimeZone }
    },
    template: `
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            :class="cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')"
          >
            <CalendarIcon class="mr-2 h-4 w-4" />
            {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <CalendarMonthYearPicker v-model="value" initial-focus />
        </PopoverContent>
      </Popover>
    `,
  }),
}
