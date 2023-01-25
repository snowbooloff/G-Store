export default {
  mounted(e, binding) {
    const options = {
      rootMargin: "0px",
      threshold: 1,
    };

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        binding.value();
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(e);
  },
};
