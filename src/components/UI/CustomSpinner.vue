<script>
export default {
  name: 'c-loading',
};
</script>

<script setup></script>

<template>
  <div class="loading flex flex-justify-center flex-align-center">
    <div class="loading__spiner"></div>
  </div>
</template>

<style>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 160;
  background-color: var(--translucent-black);
}

.loading__spiner {
  height: 150px;
  width: 150px;
  mask-image: url('@/assets/icons/logo.svg');
  mask-size: contain;
  mask-repeat: no-repeat;
  background-color: var(--main-white);
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
