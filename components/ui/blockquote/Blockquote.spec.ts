import { mount } from '@vue/test-utils'
import { render, screen } from '@testing-library/vue'
import Blockquote from './Blockquote.vue'

describe('Blockquote', () => {
  it('applies default size and alignment', () => {
    // test default alignment
    const wrapper = mount(Blockquote)
    expect(wrapper.classes()).toContain('text-start')

    // test default size
    render(Blockquote, {
      slots: { default: 'Test quote' },
    })
    const mainQuote = screen.getByText('Test quote').closest('p')
    expect(mainQuote).toHaveClass('sm:text-xl')
  })

  it.each<['sm' | 'md' | 'lg', string]>([
    ['sm', 'text-base'],
    ['md', 'sm:text-xl'],
    ['lg', 'text-xl md:text-3xl'],
  ])('applies %s size correctly', (size, expectedClass) => {
    render(Blockquote, {
      props: {
        size: size,
      },
      slots: { default: 'Test quote' },
    })
    const mainQuote = screen.getByText('Test quote').closest('p')
    expect(mainQuote).toHaveClass(expectedClass)
  })

  it.each<['left' | 'right' | 'center', string]>([
    ['right', 'text-end'],
    ['center', 'text-center'],
    ['left', 'text-start'],
  ])('applies %s alignment correctly', (alignment, expectedClass) => {
    const wrapper = mount(Blockquote, {
      props: {
        alignment: alignment,
      },
    })
    expect(wrapper.classes()).toContain(expectedClass)
  })
})
