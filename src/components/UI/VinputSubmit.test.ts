import VinputSubmit from './VinputSubmit.vue'
import { render, screen } from '@testing-library/vue'
test('check input submit visivility', () => {
  function log() {
    console.log('test')
  }

  render(VinputSubmit, {
    props: {
      modelValue: '',
      submitFunc: log
    }
  })

  screen.debug()
})
