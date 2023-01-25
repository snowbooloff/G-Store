<script>
export default {
  name: 'like-bttn',
};
</script>

<script setup>
import { ref } from 'vue';

//Components
import Notification from '@/components/Notification.vue';

//Utils
import { storageUtil } from '@/storage/localStorage';

const props = defineProps({
  gameId: {
    type: Number,
  },
  gameName: {
    type: String,
  },
});

const checkGame = storageUtil.getList(storageUtil.favorite).includes(props.gameId);

const activeIcon = ref(checkGame ? 'active-like' : 'like');
const activeClass = ref(checkGame ? 'bttn_like-active' : 'bttn_like');

const notificationText = ref('');

const isShow = ref(false);

function setFavGame() {
  const { gameStatus } = storageUtil.setGame(storageUtil.favorite, props.gameId);
  if (gameStatus) {
    activeIcon.value = 'active-like';
    activeClass.value = 'bttn_like-active';
    notificationText.value = 'added to favorite games';
  } else {
    activeIcon.value = 'like';
    activeClass.value = 'bttn_like';
    notificationText.value = 'removed from favorite games';
  }
  isShow.value = true;
  setTimeout(() => {
    isShow.value = false;
  }, 2500);
}
</script>

<template>
  <button class="bttn" :class="activeClass" @click="setFavGame">
    <transition name="slide-fade">
      <c-icon class="bttn__icon" :icon="activeIcon" />
    </transition>
    <notification v-if="isShow">{{ gameName }}: {{ notificationText }}</notification>
  </button>
</template>

<style scoped>
.bttn__icon {
  height: 20px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(5px);
  opacity: 0;
}
</style>
