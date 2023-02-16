import VinputSubmit from './VinputSubmit.vue'
import { render, screen } from '@testing-library/vue'
test('check input submit visivility', () => {
  function testFunc() {
    console.log(test)
  }

  const options = {
    props: {
      modelValue: '',
      submitFunc: testFunc
    }
  }

  render(VinputSubmit, options)

  const inputSubmit = screen.getByRole('button', { hidden: true })
  const inputSubmitDisplay = inputSubmit.style.getPropertyValue('display')

  expect(inputSubmitDisplay).toBe('none')
})
