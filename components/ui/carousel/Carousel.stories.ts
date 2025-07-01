import type { Meta, StoryObj } from '@nuxtjs/storybook'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Carousel',
  parameters: {
    docs: {
      description: {
        story: 'This is the default carousel with 5 items.',
      },
      source: {
        code: `
          <script setup lang="ts">
          import { Card, CardContent } from '@/components/ui/card'
          import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
          </script>

          <template>
            <Carousel v-slot="{ canScrollNext }" class="relative w-full max-w-xs">
              <CarouselContent>
                <CarouselItem v-for="(_, index) in 5" :key="index">
                  <div class="p-1">
                    <Card>
                      <CardContent class="flex aspect-square items-center justify-center p-6">
                        <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext v-if="canScrollNext" />
            </Carousel>
          </template>
        `.trim(),
      },
    },
  },
  render: () => ({
    components: {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
      Card,
      CardContent,
    },
    template: `
      <Carousel v-slot="{ canScrollNext }" class="relative w-full max-w-xs">
        <CarouselContent>
          <CarouselItem v-for="(_, index) in 5" :key="index">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <span class="text-4xl font-semibold">{{ index + 1 }}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext v-if="canScrollNext" />
      </Carousel>
    `,
  }),
}
