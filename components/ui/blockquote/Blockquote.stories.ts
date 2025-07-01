import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Blockquote from './Blockquote.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Components/Blockquote',
  component: Blockquote,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
  render: (args: any) => ({
    components: { Blockquote },
    setup() {
      return { args }
    },
    template: `
        <Blockquote v-bind="args">
            I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed.
        </Blockquote>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang="ts">
        import { Blockquote } from '@/components/ui/blockquote'
        </script>

        <template>
            <Blockquote>
                I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed.
            </Blockquote>
        </template>
        `.trim(),
      },
    },
  },
} satisfies Meta<typeof Blockquote>

export default meta
type Story = StoryObj<typeof meta>

export const BlockquoteStory: Story = {
  args: {
    size: 'md',
  },
  name: 'Blockquote',
}
