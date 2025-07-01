<script setup lang="ts">
import HomeIcon from '@/components/ui/icon/svgs/HomeIcon.vue'

const icons = { Home: HomeIcon }

export interface Props {
  name: keyof typeof icons
  size?: number
  strokeWidth?: number
  className?: string
}

const props = defineProps<Props>()
</script>

<template>
  <component
    :is="icons[name]"
    :size="props.size"
    :stroke-width="props.strokeWidth"
    :class="props.className"
  />
</template>
