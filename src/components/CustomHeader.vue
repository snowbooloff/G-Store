<script setup></script>

<template>
  <header class="header container flex flex-space-between">
    <div
      class="label-block flex flex-align-center cursor-pointer no-copy"
      @click="$router.push('/')"
    >
      <c-icon class="label-block__logo header__icon" :icon="'logo'" :color="'black'" />

      <p class="label-block__title main-black">GStore</p>
    </div>

    <nav class="header-nav-bar flex flex-align-center no-copy">
      <p
        class="cursor-pointer"
        :class="$route.name == 'discover' ? 'main-blue' : 'main-black'"
        @click="$router.push('/')"
      >
        Discover
      </p>

      <p
        class="cursor-pointer"
        :class="$route.name == 'explore' ? 'main-blue' : 'main-black'"
        @click="$router.push('/explore')"
      >
        Explore
      </p>

      <c-icon
        class="header__icon cursor-pointer"
        :icon="$route.name == 'favorites' ? 'active-like' : 'like'"
        :color="'black'"
        @click="$router.push('/favorites')"
      />

      <c-icon
        class="header__icon cursor-pointer"
        :icon="$route.name == 'shopping' ? 'active-shopping' : 'shopping'"
        :color="'black'"
        @click="$router.push('/shopping')"
      />

      <nav class="user-block flex flex-align-center">
        <c-icon class="user-block__avatar" :icon="'user'" :color="'white'" />

        <div class="user-block__profile flex cursor-pointer">
          <p class="user-block__text main-black">Log In</p>

          <c-icon class="user-block__icon header__icon" :icon="'arrow-down'" :color="'black'" />
        </div>
      </nav>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--main-white);
  width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150;
}

.header__icon {
  height: 20px;
  width: 20px;
}

.label-block__title {
  font-weight: 700;
}

.header-nav-bar {
  gap: var(--medium-spacing);
}

.user-block {
  gap: var(--small-spacing);
}

.user-block__avatar {
  width: 30px;
  height: 30px;
  padding: var(--small-spacing);
  border-radius: 50%;
  background-color: var(--second-white);
  border: 2px solid var(--main-blue);
}
</style>
