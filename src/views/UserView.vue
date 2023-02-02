<script setup>
import { ref, computed } from 'vue'

//Components
import UserAvatar from '../components/UserAvatar.vue'
//Utils
import { useStore } from 'vuex'
const store = useStore()

function update(e) {
  store.dispatch('user/uploadUserPic', e.target.files[0])
}
</script>
<template>
  <section class="page-block flex flex_column flex_align-center">
    <div class="profile-avatar">
      <user-avatar :size="'15vw'" />
      <input
        class="profile-avatar__input cursor-pointer"
        type="file"
        accept="image/png, image/jpeg"
        @input="update"
      />
    </div>

    <div class="details flex flex_space-between">
      <h1 class="datails__item main-white">Nickname:</h1>
      <h1 class="page-block__nickname main-blue">{{ $store.state.user.userInfo.nickname }}</h1>
    </div>
    <div class="details flex flex_space-between">
      <h1 class="datails__item main-white">Email Address:</h1>
      <h1 class="page-block__nickname main-blue">{{ $store.state.user.userInfo.email }}</h1>
    </div>
  </section>
</template>

<style scoped>
.profile-avatar {
  aspect-ratio: 1 / 1;
  width: 15vw;
  position: relative;
}
.profile-avatar:hover {
  filter: brightness(0.5);
}

.profile-avatar__input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.details {
  width: 500px;
  padding-bottom: var(--small-spacing);
  border-bottom: 2px solid var(--second-black);
}
</style>
