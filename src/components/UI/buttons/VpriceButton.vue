<script setup>
import { ref } from 'vue'

//Utils
import { localStorageUtil } from '../../../localStorage'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()

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

const text = ref(checkGame ? 'Added to cart' : props.price == 0 ? 'Free' : '$' + props.price)

const activeClass = ref(checkGame ? 'bttn_buy-active' : 'bttn_buy')

function setGameToShopping() {
  if (text.value != 'Added to cart') {
    text.value = 'Added to cart'
    activeClass.value = 'bttn_buy-active'
    localStorageUtil.placeItem(localStorageUtil.shopping, props.gameId)
    store.commit('notification/pushNotification', `${props.gameName}: added to shopping cart`)
  } else {
    router.push('/shopping')
  }
}
</script>

<template>
  <button class="bttn" :class="activeClass" @click="setGameToShopping">
    {{ text }}
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
