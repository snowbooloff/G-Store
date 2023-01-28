<script setup>
import { ref, onMounted, computed, provide } from 'vue'

//Components
import ItemsList from '../components/ItemsList.vue'
import ShoppingItem from '../components/ShoppingItem.vue'
import PageLoader from '../components/PageLoader.vue'

//Composables
import fetchGameDetails from '../composables/fetchGameDetails.js'
import checkPromo from '../composables/checkPromoCode.js'

//Utils
import { localStorageUtil } from '../localStorage'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()

const store = useStore()

const shoppingList = ref([])

onMounted(() => {
  const storageList = localStorageUtil.getList(localStorageUtil.shopping)

  if (storageList.length) {
    store.commit('setLoading', true)

    storageList.forEach((gameId) => {
      const game = ref([])

      fetchGameDetails(game, gameId, router)
        .then(() => {
          shoppingList.value.push(game.value)
        })
        .then(() => {
          if (gameId == storageList[storageList.length - 1]) {
            store.commit('setLoading', false)
          }
        })
    })
  }
})

provide('shoppingRemove', {
  removeGame
})

function removeGame(gameItem) {
  const index = shoppingList.value.indexOf(gameItem)

  shoppingList.value.splice(index, 1)
  localStorageUtil.placeItem(localStorageUtil.shopping, gameItem.id)
}

const promoCode = ref('')

function checkPromoCode() {
  console.log(promoCode.value)
  checkPromo()
}

const totalPrice = computed(() => {
  const price = shoppingList.value.reduce((acc, elem) => (acc += elem.suggestions_count / 10), 0)
  return price.toFixed(2)
})
const salesTax = computed(() => {
  return (totalPrice.value / 79).toFixed(2)
})
const grandTotal = computed(() => {
  return (+salesTax.value + +totalPrice.value).toFixed(2)
})
</script>

<template>
  <div class="page large-container pt-64px flex flex-column">
    <section class="page-block flex flex-column">
      <h1 class="page-block__title main-white">
        Shopping Cart
        <span v-show="shoppingList.length" class="page-block__count main-blue"
          >({{ shoppingList.length }} items)</span
        >
      </h1>

      <div class="shopping-block flex">
        <items-list
          v-if="!$store.state.isLoading && shoppingList.length"
          class="shopping-block__content game-list"
          :itemsList="shoppingList"
        >
          <template #item="slotProps">
            <shopping-item :game="slotProps.item" />
          </template>
        </items-list>
        <h3
          v-if="!$store.state.isLoading && !shoppingList.length"
          class="page-block__not-found second-white"
        >
          List is empty
        </h3>

        <div class="order-info">
          <div class="order-info__block flex flex-align-center flex-space-between">
            <h3 class="order-info_title main-white">Subtotal:</h3>
            <p class="order-info_price main-blue">${{ totalPrice }}</p>
          </div>

          <div class="order-info__block flex flex-align-center flex-space-between">
            <h3 class="order-info_title main-white">Sales Tax:</h3>
            <p class="order-info_price main-blue">${{ salesTax }}</p>
          </div>

          <div class="order-info__block flex flex-align-center flex-space-between">
            <h3 class="order-info_title main-white">Grand Total:</h3>
            <p class="order-info_total-price main-blue">${{ grandTotal }}</p>
          </div>

          <div class="order-info__promo flex flex-column">
            <h3 class="order-info_title main-white">Redeem Promo Code:</h3>
            <input
              class="order-info__input"
              v-model="promoCode"
              placeholder="PROMO1"
              @change="checkPromoCode"
            />
          </div>

          <button class="order-info__bttn bttn bttn_buy">Checkout</button>
        </div>
      </div>
    </section>
  </div>

  <page-loader v-if="$store.state.isLoading" />
</template>

<style>
.shopping-block {
  align-items: flex-start;
  gap: var(--medium-spacing);
}

.shopping-block__content {
  width: 100%;
}

.order-info {
  min-width: 380px;
  margin-left: auto;
  padding: var(--large-spacing);
  background: var(--second-black);
  border-radius: var(--medium-radius);
}

.order-info__block {
  margin-bottom: var(--large-spacing);
  padding-bottom: 2px;
  border-bottom: 2px solid var(--main-black);
}

.order-info__promo {
  gap: var(--small-spacing);
  margin-bottom: var(--large-spacing);
}

.order-info__input {
  width: 100%;
  border-radius: var(--small-radius);
  font-size: 14px;
  padding: 8px;
  line-height: 14px;
  background-color: var(--main-white);
  outline: none;
  border: none;
}

.order-info__bttn {
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .shopping-block {
    flex-flow: column-reverse;
  }

  .order-info {
    min-width: 100%;
  }
}
</style>
