import type { Meta, StoryFn } from '@nuxtjs/storybook'
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxAutocompleteInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxSeparator,
} from '@/components/ui/combobox'
import { Check, Search } from 'lucide-vue-next'
import { ref } from 'vue'

export default {
  title: 'Components/Combobox',
  component: Combobox,
} as Meta

const Template: StoryFn = (args) => ({
  components: {
    Combobox,
    ComboboxAnchor,
    ComboboxEmpty,
    ComboboxGroup,
    ComboboxInput,
    ComboboxAutocompleteInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxList,
    ComboboxSeparator,
    Check,
    Search,
  },
  setup() {
    const selectedValue = ref(args.modelValue)
    return { selectedValue, args }
  },
  template: `
   <Combobox by="label">
    <ComboboxAnchor class="w-[400px]">
        <ComboboxAutocompleteInput :isWithSearchIcon="true" :display-value="(val) => val?.label ?? ''" placeholder="Select framework..." />
    </ComboboxAnchor>

    <ComboboxList class="w-[400px]">
      <ComboboxEmpty>
        No framework found.
      </ComboboxEmpty>

      <ComboboxGroup>
        <ComboboxItem
          v-for="framework in args.items"
          :key="framework.value"
          :value="framework"
        >
          {{ framework.label }}

          <ComboboxItemIndicator>
            <Check class="ml-auto h-4 w-4" />
          </ComboboxItemIndicator>
        </ComboboxItem>
      </ComboboxGroup>
    </ComboboxList>
  </Combobox>
  `,
})

export const Default = Template.bind({})
Default.args = {
  modelValue: '',
  placeholder: 'Choose...',
  items: [
    { value: 'next.js', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
  ],
  text: 'label',
  value: 'value',
  hideBorderLeft: false,
}

export const WithoutBorderLeft = Template.bind({})
WithoutBorderLeft.args = {
  ...Default.args,
  hideBorderLeft: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
}
