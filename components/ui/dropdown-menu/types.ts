import type { Component } from "vue";

export type ItemsDropdown = {
  icon?: Component;
  label: string;
  link?: string;
  useDivider?: boolean;
  shortcut?: string;
  action?: () => void;
  children?: ItemsDropdown[];
  value?: string;
  type?: string;
  disabled?: boolean;
  active?: boolean;
  hidden?: boolean;
  checked?: any;
}