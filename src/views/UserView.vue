<script setup>
import { ref, computed } from 'vue'

//Components
import UserAvatar from '../components/UserAvatar.vue'
//Utils
import { useStore } from 'vuex'
const store = useStore()

const profilePic = computed(() => store.state.user.userInfo.profilePic)

console.log(profilePic)
function update(e) {
  console.log(profilePic.value)
  store.dispatch('user/uploadUserPic', e.target.files[0])
}
</script>
<template>
  <section class="page-block flex flex_column flex_align-center">
    <div class="page-block__user-img flex flex_align-center flex_justify-center">
      <icon-user class="page-block__user-icon main-white" />
      <input
        class="igm cursor-pointer"
        type="file"
        accept="image/png, image/jpeg"
        @input="update"
      />
    </div>
    <h1 class="page-block__nickname main-white">{{ $store.state.user.userInfo.nickname }}</h1>
    <user-avatar />
    <v-lazy-image class="salo" :imgSrc="profilePic" />
  </section>
</template>

<style scoped>
.page-block__user-img {
  aspect-ratio: 1 / 1;
  width: 15vw;
  border-radius: 50%;
  background-color: var(--second-white);
  position: relative;
}
.salo {
  height: 300px;
  width: 300px;
}
.page-block__user-img:hover {
  filter: brightness(0.5);
}
.page-block__user-icon {
  width: 10vw;
}

.igm {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
}
</style>
