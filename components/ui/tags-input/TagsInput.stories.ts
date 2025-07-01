import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { ref } from "vue";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from ".";

export default {
  title: "Components/TagsInput",
  component: TagsInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'
import { ref } from 'vue'

const modelValue = ref(['Apple', 'Banana'])
</script>

<template>
  <TagsInput v-model="modelValue">
    <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>

    <TagsInputInput placeholder="Fruits..." />
  </TagsInput>
</template>
        `.trim(),
      },
    },
  },
} as Meta;

export const Default: StoryFn = () => ({
  components: {
    TagsInput,
    TagsInputInput,
    TagsInputItem,
    TagsInputItemDelete,
    TagsInputItemText,
  },
  setup() {
    const modelValue = ref(["Apple", "Banana"]);
    return { modelValue };
  },
  template: `
    <TagsInput v-model="modelValue">
      <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
        <TagsInputItemText />
        <TagsInputItemDelete />
      </TagsInputItem>

      <TagsInputInput placeholder="Fruits..." />
    </TagsInput>
  `,
});
