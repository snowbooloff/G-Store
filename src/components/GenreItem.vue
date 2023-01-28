<script setup>
const props = defineProps({
  genre: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="genre-item flex flex_justify-center flex_align-center cursor-pointer">
    <v-lazy-image class="genre-item__pic" :imgSrc="genre.image_background" :alt="genre.name" />

    <h2 class="genre-item__title main-white cursor-pointer">
      {{ genre.name }}
    </h2>
  </article>
</template>

<style scoped>
.genre-item {
  width: 100%;
  border-radius: var(--medium-radius);
  position: relative;
}

.genre-item__pic {
  height: 20.64vh;
  border-radius: var(--medium-radius);
  filter: brightness(0.3);
  transition: filter 0.5s ease;
}

.genre-item:hover .genre-item__pic {
  filter: brightness(0.6);
}

.genre-item__title {
  position: absolute;
}
</style>
