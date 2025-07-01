import type { Component } from "vue"

export type TContextMenuItem = {
  type: 'item' | 'separator' | 'sub'
  label?: string
  icon?: Component
  shortcut?: string
  disabled?: boolean
  onClick?: () => void
  children?: TContextMenuItem[]
}