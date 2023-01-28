<script setup>
const props = defineProps({
  imgSrc: {
    type: [String, null]
  },
  alt: {
    type: String
  }
})

const notFoundPicUrl = 'https://i.ibb.co/VB2G77Q/s.jpg'
</script>

<template>
  <img class="lazy-image" :src="imgSrc || notFoundPicUrl" :alt="alt" loading="lazy" />
</template>

<style scoped>
.lazy-image {
  width: 100%;
  object-fit: cover;
  object-position: center center;
  background-color: #181b1f;
}
</style>
