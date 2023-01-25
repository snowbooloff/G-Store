<script>
export default {
  name: 'notification',
}
</script>

<script setup></script>

<template>
  <Teleport to="#modals">
    <div class="notification main-white">
      <slot></slot>
    </div>
  </Teleport>
</template>

<style scoped>
.notification {
  align-self: center;
  text-align: center;
  min-width: 350px;
  padding: var(--medium-spacing);
  background-color: var(--main-blue);
  border-radius: var(--small-radius);
  animation: fade 1.25s ease forwards;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
