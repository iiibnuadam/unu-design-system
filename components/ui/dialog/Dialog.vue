<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import {
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<
  DialogRootProps & {
    title?: string
    subtitle?: string
    hideFooter?: boolean
    hideClose?: boolean
  }
>()
const emits = defineEmits<
  DialogRootEmits & {
    'update:modelValue': (value: boolean) => void
    close: () => void
  }
>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot data-slot="dialog" v-bind="forwarded">
    <slot />
  </DialogRoot>
</template>
