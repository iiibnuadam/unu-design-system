<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface AvatarGroupProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<AvatarGroupProps>()
</script>

<template>
  <div :class="cn('flex -space-x-2', props.class)">
    <slot />
  </div>
</template>
