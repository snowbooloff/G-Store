<script setup>
import { ref } from 'vue'

//Components
import Notification from '../../Notification.vue'

//Utils
import { localStorageUtil } from '../../../localStorage'

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

const notificationText = ref('')

const isShow = ref(false)

function setFavGame() {
  const itemStatus = localStorageUtil.placeItem(localStorageUtil.favorites, props.gameId)
  if (itemStatus) {
    console.log(1)
    activeIcon.value = 'icon-like-active'
    activeClass.value = 'bttn_like-active'
    notificationText.value = 'added to favorite games'
  } else {
    activeIcon.value = 'icon-like'
    activeClass.value = 'bttn_like'
    notificationText.value = 'removed from favorite games'
  }
  isShow.value = true
  setTimeout(() => {
    isShow.value = false
  }, 2500)
}
</script>

<template>
  <button class="bttn" :class="activeClass" @click="setFavGame">
    <component :is="activeIcon" class="bttn__icon" />
    <notification v-if="isShow">{{ gameName }}: {{ notificationText }}</notification>
  </button>
</template>

<style scoped>
.bttn__icon {
  height: 20px;
}
</style>
