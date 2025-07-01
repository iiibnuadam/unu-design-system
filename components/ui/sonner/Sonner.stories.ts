import type { Meta, StoryFn } from '@nuxtjs/storybook'
import { defineComponent, h } from 'vue'
import { Button } from '@/components/ui/button'
import { Toaster, toast } from 'vue-sonner'

export default {
  title: 'Components/Button with Toast',
  component: Button,
  parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Toaster, toast } from 'vue-sonner'
</script>

<template>
  <Toaster />
  <Button
    variant="outline"
    @click="
      () => {
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        });
      }
    "
  >
    Add to calendar
  </Button>
</template>
        `.trim(),
      },
    },
  },
  tags: ['autodocs'],
} as Meta

const Template: StoryFn = () =>
  defineComponent({
    components: { Button, Toaster },
    setup() {
      const showToast = () => {
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }

      return { showToast }
    },
    render() {
      return h('div', {}, [
        h(Toaster), // 🔥 Ensures toast notifications render
        h(
          Button,
          { variant: 'outline', onClick: this.showToast },
          'Add to calendar'
        ),
      ])
    },
  })

export const Default = Template.bind({})
