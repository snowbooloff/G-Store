<script setup></script>

<template>
  <div class="header container flex flex_space-between">
    <div class="logo main-black flex flex_align-center cursor-pointer" @click="$router.push('/')">
      <icon-logo class="logo__icon icon" />
      <p class="logo__title no-copy">GStore</p>
    </div>

    <nav class="nav-bar flex flex_align-center no-copy">
      <router-link class="nav-bar__link main-black" to="/"> Discover </router-link>

      <router-link class="nav-bar__link main-black" to="/explore"> Explore </router-link>

      <component
        :is="$route.name == 'favorites' ? 'icon-like-active' : 'icon-like'"
        class="icon main-black cursor-pointer"
        @click="$router.push('/favorites')"
      />

      <component
        :is="$route.name == 'shopping' ? 'icon-cart-active' : 'icon-cart'"
        class="icon main-black cursor-pointer"
        @click="$router.push('/shopping')"
      />

      <div class="user flex flex_align-center cursor-pointer main-black">
        <icon-user class="user__avatar icon main-white" />
        <p class="user__text">Log In</p>
        <icon-arrow class="user__arrow icon" />
      </div>
    </nav>
  </div>
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

.icon {
  height: 20px;
}

.logo__title {
  font-weight: 700;
}

.nav-bar {
  gap: var(--medium-spacing);
}

.nav-bar__link {
  text-decoration: none;
}
.router-link-active {
  color: var(--main-blue);
}

.user__text {
  margin-left: var(--small-spacing);
}

.user__avatar {
  width: 30px;
  height: 30px;
  padding: var(--small-spacing);
  border-radius: 50%;
  background-color: var(--second-white);
  border: 2px solid var(--main-blue);
}
</style>
