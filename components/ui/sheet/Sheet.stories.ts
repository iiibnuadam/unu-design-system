import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { defineComponent } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default {
  title: "Components/Sheet",
  component: Sheet,
  argTypes: {
    name: { control: "text", defaultValue: "Pedro Duarte" },
    username: { control: "text", defaultValue: "@peduarte" },
  },
  tags: ["autodocs"],
} as Meta;

const Template: StoryFn = (args) =>
  defineComponent({
    components: {
      Sheet,
      SheetClose,
      SheetContent,
      SheetDescription,
      SheetFooter,
      SheetHeader,
      SheetTitle,
      SheetTrigger,
      Button,
      Input,
      Label,
    },
    setup() {
      return { args };
    },
    template: `
      <Sheet>
        <SheetTrigger as-child>
          <Button variant="outline">
            Open
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">
                Name
              </Label>
              <Input id="name" :default-value="args.name" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">
                Username
              </Label>
              <Input id="username" :default-value="args.username" class="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose as-child>
              <Button type="submit">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    `,
    parameters: {
      docs: {
        source: {
          code: `
            <script setup lang="ts">
            import { Button } from '@/components/ui/button'
            import { Input } from '@/components/ui/input'
            import { Label } from '@/components/ui/label'
            import {
            Sheet,
            SheetClose,
            SheetContent,
            SheetDescription,
            SheetFooter,
            SheetHeader,
            SheetTitle,
            SheetTrigger,
            } from '@/components/ui/sheet'
            </script>

            <template>
                <Sheet>
                    <SheetTrigger as-child>
                    <Button variant="outline">
                        Open
                    </Button>
                    </SheetTrigger>
                    <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <div class="grid gap-4 py-4">
                        <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="name" class="text-right">
                            Name
                        </Label>
                        <Input id="name" default-value="Pedro Duarte" class="col-span-3" />
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                        <Label for="username" class="text-right">
                            Username
                        </Label>
                        <Input id="username" default-value="@peduarte" class="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose as-child>
                        <Button type="submit">
                            Save changes
                        </Button>
                        </SheetClose>
                    </SheetFooter>
                    </SheetContent>
                </Sheet>
            </template>
            `.trim(),
        },
      },
    },
  });

export const Default = Template.bind({});
Default.args = {
  name: "Pedro Duarte",
  username: "@peduarte",
};
