<script setup>
import { ref } from 'vue'

//Utils
import { localStorageUtil } from '../../../localStorage'
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps({
  gameId: {
    type: Number
  },
  gameName: {
    type: String
  }
})

const checkGame = localStorageUtil.getList(localStorageUtil.favorites).includes(props.gameId)

const activeIcon = ref(checkGame ? 'icon-like-active' : 'icon-like')
const activeClass = ref(checkGame ? 'bttn_like-active' : 'bttn_like')

function setFavGame() {
  const itemStatus = localStorageUtil.placeItem(localStorageUtil.favorites, props.gameId)

  let notificationText = ''

  if (itemStatus) {
    activeIcon.value = 'icon-like-active'
    activeClass.value = 'bttn_like-active'
    notificationText = 'added to favorite games'
  } else {
    activeIcon.value = 'icon-like'
    activeClass.value = 'bttn_like'
    notificationText = 'removed from favorite games'
  }
  store.commit('notification/pushNotification', `${props.gameName} ${notificationText}`)
}
</script>

<template>
  <button class="bttn" :class="activeClass" @click="setFavGame">
    <component :is="activeIcon" class="bttn__icon" />
  </button>
</template>

<style scoped>
.bttn__icon {
  height: 20px;
}
</style>
