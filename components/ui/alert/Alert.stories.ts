import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Alert from './Alert.vue'
import AlertTitle from './AlertTitle.vue'
import AlertDescription from './AlertDescription.vue'
import { Terminal } from 'lucide-vue-next'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
  render: (args) => ({
    components: { Alert, AlertTitle, AlertDescription, Terminal },
    setup() {
      return { args }
    },
    template: `
    <Alert v-bind="args">
        <Terminal class="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
            You can add components to your app using the CLI.
        </AlertDescription>
    </Alert>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
            <script setup lang="ts">
            import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
            import { Terminal } from 'lucide-vue-next'
            </script>

            <template>
                <Alert>
                    <Terminal class="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                    You can add components to your app using the cli.
                    </AlertDescription>
                </Alert>
            </template>
        `.trim(),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AlertStory: Story = {
  args: {
    variant: 'default',
  },
  name: 'Alert',
}
