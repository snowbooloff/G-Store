import VmodalWindow from './VmodalWindow.vue'
import { render, screen, fireEvent } from '@testing-library/vue'
describe('check model window visivility', () => {
  const windowText: string = 'Test'

  test('check with props', () => {
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

  test('check whitout props', () => {
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
