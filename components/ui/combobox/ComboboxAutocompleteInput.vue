<script setup lang="ts">
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-vue-next'
import {
  ComboboxInput,
  type ComboboxInputEmits,
  type ComboboxInputProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<
    ComboboxInputProps & {
      class?: HTMLAttributes['class']
      isWithSearchIcon?: boolean
      ariaInvalid?: boolean
    }
  >(),
  {
    isWithSearchIcon: true,
  }
)

const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <div data-slot="command-input-wrapper" class="relative">
    <ComboboxInput
      data-slot="command-input"
      :class="
        cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          isWithSearchIcon && 'pr-9',
          props.class
        )
      "
      :aria-invalid="ariaInvalid"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />
    </ComboboxInput>
    <div
      v-if="isWithSearchIcon"
      class="absolute right-0 top-0 bottom-0 h-9 w-9 border-l border-input aria-invalid:border-destructive"
      :aria-invalid="ariaInvalid"
    >
      <SearchIcon class="size-4 shrink-0 opacity-50 m-2.5" />
    </div>
  </div>
</template>
