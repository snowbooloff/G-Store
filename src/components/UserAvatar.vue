<script setup>
const props = defineProps({})
</script>

<template>
  <div class="page-block__user-img flex flex_align-center flex_justify-center">
    <icon-user class="page-block__user-icon main-white" />
  </div>
</template>

<style>
.page-block__user-img {
  aspect-ratio: 1 / 1;
  width: 15vw;
  border-radius: 50%;
  background-color: var(--second-white);
  position: relative;
}
.page-block__user-icon {
  width: 70%;
}
</style>
