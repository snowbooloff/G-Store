<template>
  <div class="nav-bar-for-empty">
    <h3 class="nav-bar-for-empty__text main-blue"><slot></slot></h3>
    <span>
      <button
        class="nav-bar-for-empty__bttn bttn bttn_transparent"
        @click="$router.push('/')"
      >
        Discover Page
      </button>
      <button
        class="nav-bar-for-empty__bttn bttn bttn_transparent"
        @click="$router.push('/explore')"
      >
        Explore Page
      </button>
    </span>
  </div>
</template>

<style scoped>
.nav-bar-for-empty {
  width: 100%;
  margin-top: var(--extra-large-spacing);
  text-align: center;
  margin-bottom: var(--medium-spacing);
}
.nav-bar-for-empty__bttn {
  margin-top: var(--medium-spacing);
}
.nav-bar-for-empty__bttn:first-child {
  margin-right: var(--medium-spacing);
}
</style>
