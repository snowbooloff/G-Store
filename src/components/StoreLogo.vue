<script setup></script>

<template>
  <div class="logo main-black flex flex_align-center cursor-pointer" @click="$router.push('/')">
    <icon-logo class="logo__icon icon" />
    <p class="logo__title no-copy">GStore</p>
  </div>
</template>

<style scoped>
.icon {
  height: 100%;
  width: 20px;
}

.logo__title {
  font-weight: 700;
  line-height: 1;
}
</style>
