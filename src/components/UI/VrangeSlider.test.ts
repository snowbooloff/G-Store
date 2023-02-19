import { render, screen, fireEvent } from '@testing-library/vue'
import RangeSlider from './VrangeSlider.vue'

describe('RangeSlider', () => {
  it('updates modelValue when inputs change', async () => {
    const minValue = 0
    const maxValue = 10
    const stepValue = 1
    const modelValue = [3, 7]

    const { emitted } = render(RangeSlider, {
      props: {
        modelValue,
        minValue,
        maxValue,
        stepValue
      }
    })

    // Find and update the first input
    const firstInput = screen.getByPlaceholderText('Min')
    await fireEvent.update(firstInput, '4')

    // Find and update the second input
    const secondInput = screen.getByPlaceholderText('Max')
    await fireEvent.update(secondInput, '6')

    // Assert that modelValue was updated with the new values
    expect(emitted()['input'][0]).toEqual(4)
  })
})
