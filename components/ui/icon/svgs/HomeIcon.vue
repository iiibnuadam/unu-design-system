<script setup lang="ts">
defineProps<{ size?: number; strokeWidth?: number; className?: string }>()
</script>

<template>
  <svg
    :class="className"
    :width="size || 24"
    :height="size || 24"
    :stroke-width="strokeWidth || 2"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
    <path
      d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    />
  </svg>
</template>
