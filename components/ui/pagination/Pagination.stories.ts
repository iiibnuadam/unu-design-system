import type { Meta, StoryFn } from '@nuxtjs/storybook'
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export default {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    total: { control: { type: 'number' }, defaultValue: 100 },
    itemsPerPage: { control: { type: 'number' }, defaultValue: 10 },
    siblingCount: { control: { type: 'number' }, defaultValue: 1 },
    defaultPage: { control: { type: 'number' }, defaultValue: 2 },
    showEdges: { control: { type: 'boolean' }, defaultValue: true },
  },
} as Meta

const Template: StoryFn = (args) =>
  defineComponent({
    components: {
      Button,
      Pagination,
      PaginationContent,
      PaginationEllipsis,
      PaginationItem,
      PaginationNext,
      PaginationPrevious,
    },
    setup() {
      return { args }
    },
    template: `
   <Pagination v-slot="{ page }" :items-per-page="10" :total="30" :default-page="2">
      <PaginationContent v-slot="{ items }">
        <PaginationPrevious />

        <template v-for="(item, index) in items" :key="index">
          <PaginationItem
            v-if="item.type === 'page'"
            :value="item.value"
            :is-active="item.value === page"
          >
            {{ item.value }}
          </PaginationItem>
        </template>

        <PaginationEllipsis :index="4" />

        <PaginationNext />
      </PaginationContent>
    </Pagination>
    `,
  })

export const Default = Template.bind({})
Default.args = {
  total: 100,
  itemsPerPage: 10,
  siblingCount: 1,
  defaultPage: 2,
  showEdges: true,
}
