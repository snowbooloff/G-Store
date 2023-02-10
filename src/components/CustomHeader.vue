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

const isMenuShow = ref<boolean>(false)

const isBurgerMenuShow = ref<boolean>(window.innerWidth <= 600 ? true : false)
const isBurgerMenuActive = ref<boolean>(false)

function checkWindowWidth(): void {
  if (window.innerWidth <= 600) {
    isBurgerMenuShow.value = true
  } else {
    isBurgerMenuShow.value = false
    isBurgerMenuActive.value = false
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
        @click.stop="isMenuShow = !isMenuShow"
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
          :class="{ icon_active: isMenuShow }"
        />
        <v-modal-window
          class="user__menu flex flex_column"
          v-model:isVisible="isMenuShow"
        >
          <link-icon
            v-if="!isAuth"
            :text="'Sign Up'"
            :route="'/register'"
          />

          <link-icon
            v-if="!isAuth"
            :text="'Sign In'"
            :route="'/login'"
          />

          <link-icon
            v-if="isAuth"
            :text="'My Profile'"
            :route="'/user'"
            :firstIcon="'icon-user'"
          />

          <link-icon
            v-if="isAuth"
            :text="'Sign Out'"
            :route="'/login'"
            @click="$store.dispatch('user/signOut')"
          />
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
        <div class="user flex flex_align-center cursor-pointer main-black">
          <user-avatar
            :size="'30px'"
            class="user_pic"
          />
          <p class="user__text">
            {{ headerUserName }}
          </p>
        </div>

        <link-icon
          v-if="isAuth"
          :text="'My Profile'"
          :route="'/user'"
          :firstIcon="'icon-user'"
        />

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

        <link-icon
          v-if="!isAuth"
          :text="'Sign Up'"
          :route="'/register'"
        />

        <link-icon
          v-if="!isAuth"
          :text="'Sign In'"
          :route="'/login'"
        />

        <link-icon
          v-if="isAuth"
          :text="'Sign Out'"
          :route="'/login'"
          @click="$store.dispatch('user/signOut')"
        />
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
}
.icon_active {
  transform: rotate(180deg);
}

.nav-bar {
  gap: var(--medium-spacing);
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
  right: 2vw;
  gap: var(--medium-spacing);
}

.burger-menu__content {
  position: absolute;
  top: 110%;
  right: 2vw;
  width: 150px;
  gap: var(--large-spacing);
}
</style>
