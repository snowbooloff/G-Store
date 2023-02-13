import { DirectiveBinding } from 'vue'

export default {
  mounted(event: HTMLElement, binding: DirectiveBinding) {
    const options: object = {
      rootMargin: '0px',
      threshold: 1
    }

    function callback(entries: any, observer?: IntersectionObserver) {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(event)
  }
}
