<script setup lang="ts">
import {
  TooltipRoot,
  type TooltipRootEmits,
  type TooltipRootProps,
  useForwardPropsEmits,
} from 'reka-ui'

const props = withDefaults(
  defineProps<
    TooltipRootProps & {
      text?: string
      tooltipText?: string
      side?: 'top' | 'right' | 'bottom' | 'left'
      align?: 'start' | 'center' | 'end'
      contentClass?: string
    }
  >(),
  {
    side: 'top',
    align: 'center',
  }
)
const emits = defineEmits<TooltipRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TooltipRoot data-slot="tooltip" v-bind="forwarded">
    <slot />
  </TooltipRoot>
</template>
