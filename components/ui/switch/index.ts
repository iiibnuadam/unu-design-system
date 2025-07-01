import { cva, type VariantProps } from 'class-variance-authority'

export { default as Switch } from './Switch.vue'

export const switchVariants = cva('', {
  variants: {
    switchSize: {
      default: 'h-[1.15rem] w-8',
      sm: 'h-[1rem] w-7',
      lg: 'h-[1.375rem] w-10',
    },
  },
  defaultVariants: {
    switchSize: 'default',
  },
})

export const switchThumbVariants = cva('', {
  variants: {
    switchThumbSize: {
      default: 'size-4',
      sm: 'size-3.5',
      lg: 'size-5',
    },
  },
  defaultVariants: {
    switchThumbSize: 'default',
  },
})

export type SwitchVariants = VariantProps<typeof switchVariants>
export type SwitchThumbVariants = VariantProps<typeof switchThumbVariants>
