<template>
  <figure
    class="ms-auto me-20 relative z-1 max-w-full w-3xl h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg"
  >
    <div
      class="relative flex items-center max-w-full bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700"
    >
      <div class="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
        <span
          class="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"
        ></span>
        <span
          class="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"
        ></span>
        <span
          class="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"
        ></span>
      </div>
      <div
        class="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400"
      >
        {{ url }}
      </div>
    </div>

    <div class="bg-gray-800 rounded-b-lg">
      <img class="max-w-full h-auto rounded-b-lg" :src="src" :alt="alt" />
    </div>
  </figure>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  src: string
  alt: string
  url: string
}>()
</script>
