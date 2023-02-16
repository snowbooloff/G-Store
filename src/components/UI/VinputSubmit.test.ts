import VinputSubmit from './VinputSubmit.vue'
import { render, screen } from '@testing-library/vue'
test('check input submit visivility', () => {
  const options = {
    props: {
      modelValue: '',
      submitFunc: console.log('test')
    }
  }

  render(VinputSubmit, options)

  const inputSubmit = screen.getByText('SUBMIT')
  const inputSubmitDisplay = inputSubmit.style.getPropertyValue('display')

  expect(inputSubmitDisplay).toBe('none')
})
