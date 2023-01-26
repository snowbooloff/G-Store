<script>
export default {
  name: 'price-bttn'
}
</script>

<script setup>
import { ref } from 'vue'

//Components
import Notification from '../Notification.vue'

//Utils
import { localStorageUtil } from '../../localStorage'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  price: {
    type: Number
  },
  gameId: {
    type: Number
  },
  gameName: {
    type: String
  }
})

const checkGame = localStorageUtil.getList(localStorageUtil.shopping).includes(props.gameId)
const text = ref(checkGame ? 'Added to kart' : props.price == 0 ? 'Free' : '$' + props.price)

const activeClass = ref(checkGame ? 'bttn_buy-active' : 'bttn_buy')

const isShow = ref(false)

function setGameToShopping() {
  if (text.value != 'Added to kart') {
    text.value = 'Added to kart'
    activeClass.value = 'bttn_buy-active'
    localStorageUtil.placeItem(localStorageUtil.shopping, props.gameId)
  } else {
    router.push('/shopping')
  }
  isShow.value = true
  setTimeout(() => {
    isShow.value = false
  }, 2500)
}
</script>

<template>
  <button class="bttn" :class="activeClass" @click="setGameToShopping">
    {{ text }}
    <notification v-if="isShow">{{ gameName }}: added to shopping kart</notification>
  </button>
</template>

<style scoped>
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
