<script setup>
//Components
import StoreLogo from '../components/StoreLogo.vue'
</script>

<template>
  <div class="page container pt-64px flex flex_column">
    <section class="page-block flex flex_column">
      <h1 class="page-block__title main-white">JOIN THE WORLD OF</h1>
      <store-logo />
    </section>
    <section class="page-block flex flex_column">
      <input />
      <input />
    </section>
  </div>
</template>

<style scoped>
@import url('./views.css');
.page-block__title {
  text-align: center;
}
</style>
