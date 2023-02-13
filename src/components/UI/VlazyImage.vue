<script setup lang="ts">
defineProps<{
  imgSrc: string | null
  alt?: string
}>()

const notFoundPicUrl = 'https://i.ibb.co/VB2G77Q/s.jpg'
</script>

<template>
  <img
    class="lazy-image__img"
    :src="imgSrc || notFoundPicUrl"
    :alt="alt"
    loading="lazy"
  />
</template>

<style scoped>
.lazy-image__img {
  width: 100%;
  object-fit: cover;
  object-position: center center;
  background-color: #181b1f;
}
</style>
