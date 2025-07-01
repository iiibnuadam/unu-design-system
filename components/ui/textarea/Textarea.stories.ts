import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { defineComponent } from "vue";
import { Textarea } from "@/components/ui/textarea";

export default {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
  <Textarea placeholder="Type your message here." />
</template>
        `.trim(),
      },
    },
  },
} as Meta;

const Template: StoryFn = () =>
  defineComponent({
    components: { Textarea },
    template: `<Textarea placeholder="Type your message here." />`,
  });

export const Default = Template.bind({});
