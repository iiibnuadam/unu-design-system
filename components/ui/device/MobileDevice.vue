<template>
  <figure class="mx-auto max-w-full w-60 h-auto">
    <div
      class="p-1.5 bg-gray-800 shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-neutral-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)] rounded-3xl"
    >
      <img class="max-w-full rounded-[1.25rem] h-auto" :src="src" :alt="alt" />
    </div>
  </figure>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  src: string
  alt: string
}>()
</script>
