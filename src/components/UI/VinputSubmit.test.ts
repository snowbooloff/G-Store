import { render, screen } from '@testing-library/vue'

import VinputSubmit from './VinputSubmit.vue'
import Vinput from './Vinput.vue'

import { config } from '@vue/test-utils'

config.global.components = {
  'v-input': Vinput
}

it('checking input submit visivility', () => {
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

  expect(inputSubmit.style['display']).toBe('none')
})
