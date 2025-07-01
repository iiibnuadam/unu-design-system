import type { Meta, StoryObj } from '@nuxtjs/storybook'
import Card from './Card.vue'
import CardHeader from './CardHeader.vue'
import CardTitle from './CardTitle.vue'
import CardDescription from './CardDescription.vue'
import CardContent from './CardContent.vue'
import CardFooter from './CardFooter.vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Card',
  render: () => ({
    components: {
      Card,
      CardHeader,
      CardTitle,
      CardDescription,
      CardContent,
      CardFooter,
      Button,
      Input,
      Label,
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
    },
    template: `
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="grid items-center w-full gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="nuxt">Nuxt</SelectItem>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex justify-between px-6 pb-6">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
        <script setup lang='ts'>
        import { Button } from '@/components/ui/button'
        import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
        } from '@/components/ui/card'
        import { Input } from '@/components/ui/input'
        import { Label } from '@/components/ui/label'
        import {
        Select,
        SelectContent,
        SelectItem,
        SelectTrigger,
        SelectValue,
        } from '@/components/ui/select'
        </script>

        <template>
            <Card class="w-[350px]">
                <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                <form>
                    <div class="grid items-center w-full gap-4">
                    <div class="flex flex-col space-y-1.5">
                        <Label for="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <Label for="framework">Framework</Label>
                        <Select>
                        <SelectTrigger id="framework">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                            <SelectItem value="nuxt">
                            Nuxt
                            </SelectItem>
                            <SelectItem value="next">
                            Next.js
                            </SelectItem>
                            <SelectItem value="sveltekit">
                            SvelteKit
                            </SelectItem>
                            <SelectItem value="astro">
                            Astro
                            </SelectItem>
                        </SelectContent>
                        </Select>
                    </div>
                    </div>
                </form>
                </CardContent>
                <CardFooter class="flex justify-between px-6 pb-6">
                <Button variant="outline">
                    Cancel
                </Button>
                <Button>Deploy</Button>
                </CardFooter>
            </Card>
        </template>
        `.trim(),
      },
    },
  },
}
