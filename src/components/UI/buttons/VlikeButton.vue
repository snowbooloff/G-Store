<script setup lang="ts">
import { ref } from 'vue'

//Utils
import { localStorageUtil } from '@/localStorage'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps<{
  gameId: number
  gameName: string
}>()

function checkItem(): boolean {
  return localStorageUtil.checkItem(localStorageUtil.favorites, props.gameId)
}

const activeIcon = ref<string>(checkItem() ? 'icon-like-active' : 'icon-like')

function setFavGame() {
  const itemStatus: boolean = localStorageUtil.placeItem(localStorageUtil.favorites, props.gameId)

  let notificationText: string = ''

  if (itemStatus) {
    activeIcon.value = 'icon-like-active'
    notificationText = 'added to favorite games'
  } else {
    activeIcon.value = 'icon-like'
    notificationText = 'removed from favorite games'
  }
  store.commit('notification/pushNotification', `${props.gameName} ${notificationText}`)
}
</script>

<template>
  <button
    class="bttn"
    :class="checkItem() ? 'bttn_like-active' : 'bttn_like'"
    @click="setFavGame"
  >
    <component
      :is="activeIcon"
      class="bttn__icon"
    />
  </button>
</template>

<style scoped>
.bttn__icon {
  height: 20px;
}
</style>
