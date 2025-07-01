import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const sizeVariant = cva('', {
  variants: {
    size: {
      sm: 'text-base',
      md: 'sm:text-xl',
      lg: 'text-xl md:text-3xl md:leading-normal',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SizeVariants = VariantProps<typeof sizeVariant>

export const alignmentVariant = cva('items-start', {
  variants: {
    alignment: {
      right: 'justify-end text-end',
      left: 'justify-start text-start',
      center: 'justify-center text-center',
    },
  },
  defaultVariants: {
    alignment: 'left',
  },
})

export type AlignmentVariants = VariantProps<typeof alignmentVariant>
