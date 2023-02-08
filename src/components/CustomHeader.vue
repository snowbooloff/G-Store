<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'

//Components
import LinkIcon from './LinkIcon.vue'
import UserAvatar from './UserAvatar.vue'

//Utils
import { useStore } from 'vuex'
const store = useStore()

const userNickname = computed<string>(() => store.state.user.userInfo.nickname)
const isAuth = computed<boolean>(() => store.state.user.isAuth)

const headerUserName = computed<string>(() => {
  return isAuth.value ? userNickname.value : 'Profile'
})

const menuIsActive = ref<boolean>(false)

const isBurgerMenuShow = ref<boolean>(window.innerWidth <= 600 ? true : false)
const isBurgerMenuActive = ref<boolean>(false)

function checkWindowWidth(): void {
  if (window.innerWidth <= 600) {
    isBurgerMenuShow.value = true
  } else {
    isBurgerMenuShow.value = false
  }
}

window.addEventListener('resize', checkWindowWidth)

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowWidth)
})
</script>

<template>
  <div class="header container flex flex_space-between flex_align-center">
    <div
      class="logo flex flex_align-center main-black cursor-pointer"
      @click="$router.push('/')"
    >
      <icon-logo class="logo__icon icon" />
      <p class="logo__title no-copy"><strong>GSTORE</strong></p>
    </div>

    <nav
      class="nav-bar flex flex_align-center no-copy"
      v-if="!isBurgerMenuShow"
    >
      <link-icon
        :text="'Discover'"
        :route="'/'"
        :firstIcon="'icon-discover'"
        :secondIcon="'icon-discover-active'"
      />

      <link-icon
        :text="'Explore'"
        :route="'/explore'"
        :firstIcon="'icon-explore'"
        :secondIcon="'icon-explore-active'"
      />

      <link-icon
        :text="'Favorites'"
        :route="'/favorites'"
        :firstIcon="'icon-like'"
        :secondIcon="'icon-like-active'"
      />

      <link-icon
        :text="'Shopping'"
        :route="'/shopping'"
        :firstIcon="'icon-cart'"
        :secondIcon="'icon-cart-active'"
      />

      <div
        class="user flex flex_align-center cursor-pointer main-black"
        @click.stop="menuIsActive = !menuIsActive"
      >
        <user-avatar
          :size="'30px'"
          class="user_pic"
        />
        <p class="user__text">
          {{ headerUserName }}
        </p>
        <icon-arrow
          class="user__arrow icon"
          :class="{ icon_active: menuIsActive }"
        />
        <v-modal-window
          class="user__menu"
          v-model:isVisible="menuIsActive"
        >
          <link-icon
            :text="'Shopping'"
            :route="'/shopping'"
            :firstIcon="'icon-cart'"
            :secondIcon="'icon-cart-active'"
          />
          <router-link
            v-if="!isAuth"
            class="user__bttn main-black"
            to="/register"
            >Sign Up</router-link
          >
          <router-link
            v-if="!isAuth"
            class="user__bttn main-black"
            to="/login"
            >Sign In</router-link
          >
          <router-link
            v-if="isAuth"
            class="user__bttn main-black"
            to="/user"
            >My Profile</router-link
          >
          <router-link
            v-if="isAuth"
            class="user__bttn main-black"
            to="/login"
            @click="$store.dispatch('user/signOut')"
            >Sign Out</router-link
          >
        </v-modal-window>
      </div>
    </nav>

    <div
      class="burger-menu flex flex_align-center"
      v-if="isBurgerMenuShow"
    >
      <component
        class="burger-menu__link icon main-black cursor-pointer"
        :is="isBurgerMenuActive ? 'icon-cross' : 'icon-burger'"
        @click.stop="isBurgerMenuActive = !isBurgerMenuActive"
      />
      <v-modal-window
        class="burger-menu__content flex flex_column no-copy"
        v-model:isVisible="isBurgerMenuActive"
      >
        <div class="user flex flex_align-center cursor-pointer">
          <user-avatar
            :size="'30px'"
            class="user_pic main-black"
          />
          <router-link
            class="nav-bar__link user__text main-black"
            to="/user"
          >
            {{ headerUserName }}
          </router-link>
        </div>

        <link-icon
          :text="'Discover'"
          :route="'/'"
          :firstIcon="'icon-discover'"
          :secondIcon="'icon-discover-active'"
        />

        <link-icon
          :text="'Explore'"
          :route="'/explore'"
          :firstIcon="'icon-explore'"
          :secondIcon="'icon-explore-active'"
        />

        <link-icon
          :text="'Favorites'"
          :route="'/favorites'"
          :firstIcon="'icon-like'"
          :secondIcon="'icon-like-active'"
        />

        <link-icon
          :text="'Shopping'"
          :route="'/shopping'"
          :firstIcon="'icon-cart'"
          :secondIcon="'icon-cart-active'"
        />

        <router-link
          v-if="!isAuth"
          class="user__bttn main-black"
          to="/register"
        >
          Sign Up
        </router-link>

        <router-link
          v-if="!isAuth"
          class="user__bttn main-black"
          to="/login"
        >
          Sign In
        </router-link>

        <router-link
          v-if="isAuth"
          class="user__bttn main-black"
          to="/login"
          @click="$store.dispatch('user/signOut')"
        >
          Sign Out
        </router-link>
      </v-modal-window>
    </div>
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

.logo__title {
  line-height: 1;
  font-size: 16px;
}

.icon {
  height: 20px;
  width: 20px;
}
.icon_active {
  transform: rotate(180deg);
}

.nav-bar {
  gap: var(--medium-spacing);
}

.nav-bar__link {
  font-size: 16px;
  text-decoration: none;
}
.router-link-active {
  color: var(--main-blue);
}
.user__text {
  font-size: 16px;
  margin-left: var(--small-spacing);
}
.user_pic {
  border: 2px solid var(--main-blue);
}

.user__arrow {
  margin-top: 2px;
}
.user__menu {
  top: 110%;
}
.user__bttn {
  display: block;
  font-size: 16px;
  margin-bottom: var(--medium-spacing);
  text-decoration: none;
}
.user__bttn:last-child {
  margin-bottom: 0;
}

.burger-menu {
  position: relative;
  height: 100%;
}
.burger-menu__content {
  position: absolute;
  top: 110%;
  right: 0;
  gap: var(--large-spacing);
}
</style>
