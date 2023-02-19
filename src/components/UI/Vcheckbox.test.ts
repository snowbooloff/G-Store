import { render, screen } from '@testing-library/vue'

import Vcheckbox from './Vcheckbox.vue'

describe('checking input checkbox status', () => {
  const modelValueArr: (string | number)[] = [1, 2, 3]

  it('checking with a value that is in an array', () => {
    const options = {
      props: {
        modelValue: modelValueArr,
        value: 1
      }
    }

    render(Vcheckbox, options)

    const inputCheckbox: HTMLInputElement = screen.getByRole('checkbox', { hidden: true })

    expect(inputCheckbox.checked).toBeTruthy()
  })

  it('checking with value is not in the array', () => {
    const options = {
      props: {
        modelValue: modelValueArr,
        value: 4
      }
    }

    render(Vcheckbox, options)

    const inputCheckbox: HTMLInputElement = screen.getByRole('checkbox', { hidden: true })

    expect(inputCheckbox.checked).toBeFalsy()
  })
})
