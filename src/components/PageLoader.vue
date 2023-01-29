<script setup></script>

<template>
  <div class="loading flex flex_justify-center flex_align-center">
    <icon-logo class="loading__spiner main-white" />
  </div>
</template>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 140;
  background-color: var(--translucent-black);
}

.loading__spiner {
  height: 15%;
  aspect-ratio: 1 / 1;
  animation: loading 1.25s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
