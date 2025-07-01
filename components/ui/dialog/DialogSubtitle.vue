<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <p
    :class="
      cn(
        'text-base leading-none tracking-tight text-muted-foreground mt-[10px] mb-0 text-center',
        props.class
      )
    "
  >
    <slot />
  </p>
</template>
