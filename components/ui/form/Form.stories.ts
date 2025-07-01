import { defineComponent, h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { Meta, StoryFn } from '@nuxtjs/storybook'
import { vAutoAnimate } from '@formkit/auto-animate'

export default {
  title: 'Components/FormField',
  component: FormField,
  parameters: {
    docs: {
      description: {
        component: 'A form field with validation using vee-validate and Zod.',
      },
    },
  },
} as Meta

const Template: StoryFn = () =>
  defineComponent({
    components: {
      Button,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
      Input,
    },
    directives: {
      autoAnimate: vAutoAnimate,
    },
    setup() {
      const formSchema = toTypedSchema(
        z.object({ username: z.string().min(2).max(50) })
      )

      const { handleSubmit } = useForm({ validationSchema: formSchema })

      const onSubmit = handleSubmit((values) => {
        console.log(JSON.stringify(values, null, 2))
      })

      return { onSubmit }
    },
    template: `
      <form class="w-2/3 space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="username">
          <FormItem v-auto-animate>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" placeholder="shadcn" v-bind="componentField" />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit">
          Submit
        </Button>
      </form>
    `,
  })

export const Default = Template.bind({})
