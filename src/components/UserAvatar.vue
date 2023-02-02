<script setup>
import { computed } from 'vue'

//Utils
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
  size: {
    type: String,
    required: true
  }
})

const userImage = computed(() => store.state.user.userInfo.image)
</script>

<template>
  <div class="user-avatar">
    <icon-user v-if="!userImage" class="user-avatar__icon main-white" />
    <img v-else :src="userImage" class="user-avatar__img" />
  </div>
</template>

<style scoped>
.user-avatar,
.user-avatar__icon,
.user-avatar__img {
  border-radius: 50%;
}
.user-avatar {
  width: v-bind(size);
  height: v-bind(size);
}
.user-avatar__icon {
  width: 100%;
  height: 100%;
  padding: 16.6%;
  background-color: var(--second-white);
}
.user-avatar__img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
