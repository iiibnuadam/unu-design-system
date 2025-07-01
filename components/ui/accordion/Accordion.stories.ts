import type { Meta, StoryObj } from '@nuxtjs/storybook'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
    },
    defaultValue: {
      control: 'text',
    },
  },
  render: (args) => ({
    components: {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    },
    setup() {
      const accordionItems = [
        {
          value: 'item-1',
          title: 'Is it accessible?',
          content: 'Yes. It adheres to the WAI-ARIA design pattern.',
        },
        {
          value: 'item-2',
          title: 'Is it unstyled?',
          content:
            "Yes. It's unstyled by default, giving you freedom over the look and feel.",
        },
        {
          value: 'item-3',
          title: 'Can it be animated?',
          content:
            'Yes! You can use the transition prop to configure the animation.',
        },
      ]

      return { args, accordionItems }
    },
    template: `
      <Accordion v-bind="args" class="w-full">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>{{ item.content }}</AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
        import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

        const defaultValue = 'item-1'

        const accordionItems = [
        { value: 'item-1', title: 'Is it accessible?', content: 'Yes. It adheres to the WAI-ARIA design pattern.' },
        { value: 'item-2', title: 'Is it unstyled?', content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.' },
        { value: 'item-3', title: 'Can it be animated?', content: 'Yes! You can use the transition prop to configure the animation.' },
        ]
        </script>

        <template>
            <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
                <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
                <AccordionTrigger>{{ item.title }}</AccordionTrigger>
                <AccordionContent>
                    {{ item.content }}
                </AccordionContent>
                </AccordionItem>
            </Accordion>
        </template>
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultAccordion: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-1',
  },
}
