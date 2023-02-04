export default {
  mounted(event: HTMLElement, binding: { value: Function }) {
    const options: object = {
      rootMargin: '0px',
      threshold: 1
    }

    function callback(entries: any) {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(event)
  }
}
