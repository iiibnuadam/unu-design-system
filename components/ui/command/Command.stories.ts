import type { Meta, StoryObj } from '@nuxtjs/storybook'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-vue-next'

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
    },
    modelValue: {
      control: 'text',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
          <script setup lang="ts">
          import {
            Command,
            CommandEmpty,
            CommandGroup,
            CommandInput,
            CommandItem,
            CommandList,
            CommandSeparator,
            CommandShortcut,
          } from '@/components/ui/command'

          import {
            Calculator,
            Calendar,
            CreditCard,
            Settings,
            Smile,
            User,
          } from 'lucide-vue-next'
          </script>

          <template>
            <Command class="rounded-lg border shadow-md max-w-[450px]">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem value="Calendar">
                    <Calendar class="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem value="Search Emoji">
                    <Smile class="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem value="Calculator">
                    <Calculator class="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem value="Profile">
                    <User class="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="Billing">
                    <CreditCard class="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem value="Settings">
                    <Settings class="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </template>
        `.trim(),
      },
    },
  },
  render: (args: any) => ({
    components: {
      Command,
      CommandEmpty,
      CommandGroup,
      CommandInput,
      CommandItem,
      CommandList,
      CommandSeparator,
      CommandShortcut,
      Calendar,
      Smile,
      Calculator,
      User,
      CreditCard,
      Settings,
    },
    setup() {
      return { args }
    },
    template: `
      <Command v-bind="args" class="rounded-lg border shadow-md max-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem value="Calendar">
              <Calendar class="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem value="Search Emoji">
              <Smile class="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem value="Calculator">
              <Calculator class="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem value="Profile">
              <User class="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem value="Billing">
              <CreditCard class="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem value="Settings">
              <Settings class="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Command',
}
