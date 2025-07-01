import type { Meta, StoryObj } from "@nuxtjs/storybook";
import { ref } from "vue";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    modelValue: { control: "boolean" },
    title: { control: "text" },
    subtitle: { control: "text" },
    hideFooter: { control: "boolean" },
    hideClose: { control: "boolean" },
  },
};

export default meta;

const Template: Story = (args: any) => ({
  components: { Dialog, Button },
  setup() {
    const isOpen = ref(false);
    return { args, isOpen };
  },
  template: `
    <div>
      <Button @click="isOpen = true">Open Dialog</Button>
      <Dialog v-bind="args" v-model:modelValue="isOpen">
        <p>This is a sample dialog content.</p>
        <template #footer>
          <Button @click="isOpen = false">Close</Button>
        </template>
      </Dialog>
    </div>
  `,
});

export const Default: Story = Template.bind({});
Default.args = {
  modelValue: false,
  title: "Dialog Title",
  subtitle: "Dialog Subtitle",
  hideFooter: false,
  hideClose: false,
};

export const WithoutFooter: Story = Template.bind({});
WithoutFooter.args = {
  ...Default.args,
  hideFooter: true,
};

export const WithoutCloseButton: Story = Template.bind({});
WithoutCloseButton.args = {
  ...Default.args,
  hideClose: true,
};
