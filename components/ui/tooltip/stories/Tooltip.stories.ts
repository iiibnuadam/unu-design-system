import type { Meta, StoryFn } from "@nuxtjs/storybook";
import { Tooltip } from '@/components/ui/tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: 'text', defaultValue: 'Hover me' },
    tooltipText: { control: 'text', defaultValue: 'This is a tooltip' },
    side: { 
      control: 'select', 
      options: ['top', 'right', 'bottom', 'left'], 
      defaultValue: 'top' 
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      defaultValue: 'center'
    },
    contentClass: { control: 'text', defaultValue: '' }
  },
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args: any) => ({
  components: { Tooltip },
  setup() {
    return { args };
  },
  template: `
    <Tooltip v-bind="args">
    </Tooltip>
  `,
});

export const Default = Template.bind({});
Default.args = {
  text: 'Hover me',
  tooltipText: 'This is a tooltip',
  side: 'top',
  align: 'center',
};

export const BottomTooltip = Template.bind({});
BottomTooltip.args = {
  text: 'Hover me',
  tooltipText: 'Tooltip at the bottom',
  side: 'bottom',
  align: 'center',
};

export const LeftTooltip = Template.bind({});
LeftTooltip.args = {
  text: 'Hover me',
  tooltipText: 'Tooltip on the left',
  side: 'left',
  align: 'start',
};