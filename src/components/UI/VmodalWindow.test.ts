import VmodalWindow from './VmodalWindow.vue'

import { render, screen } from '@testing-library/vue'

describe('checking model window visivility', () => {
  const windowText: string = 'Test'

  it('checking with props', () => {
    const options = {
      props: {
        isVisible: true
      },
      slots: {
        default: windowText
      }
    }

    render(VmodalWindow, options)

    const modalWindow = screen.getByText(windowText)

    expect(modalWindow.innerHTML).toBeTruthy()
  })

  it('checking whitout props', () => {
    const options = {
      slots: {
        default: windowText
      }
    }

    render(VmodalWindow, options)

    const modalWindow = screen.queryByText(windowText)

    expect(modalWindow).toBeNull()
  })
})
