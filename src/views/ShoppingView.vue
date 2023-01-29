<script setup>
import { ref, reactive, watch, onMounted, computed, provide } from 'vue'

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

function removeGame(game) {
  const index = shoppingList.value.indexOf(game)

  shoppingList.value.splice(index, 1)
  localStorageUtil.placeItem(localStorageUtil.shopping, game.id)
}

const promoCode = reactive({
  isActive: false,
  isChecked: false,
  value: '',
  discount: 0,
  discountType: ''
})

watch(promoCode, () => {
  if (!promoCode.value.length) {
    promoCode.isChecked = false
    promoCode.isActive = false
  }
})

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
  <div class="page container pt-64px flex flex_column">
    <section class="page-block flex flex_column">
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
          class="text-for-empty second-white"
        >
          List is empty
        </h3>

        <div class="order-info">
          <div class="order-info__block flex flex_align-center flex_space-between">
            <h3 class="order-info_title main-white">Subtotal:</h3>
            <p class="order-info_price main-blue">${{ totalPrice }}</p>
          </div>

          <div class="order-info__block flex flex_align-center flex_space-between">
            <h3 class="order-info_title main-white">Sales Tax:</h3>
            <p class="order-info_price main-blue">${{ salesTax }}</p>
          </div>

          <div class="order-info__block flex flex_align-center flex_space-between">
            <h3 class="order-info_title main-white">Grand Total:</h3>
            <p class="order-info_total-price main-blue">${{ grandTotal }}</p>
          </div>

          <div class="promo flex flex_column">
            <h3 class="promo__title main-white">Redeem Promo Code:</h3>
            <div class="promo__block">
              <input class="promo__input" v-model="promoCode.value" placeholder="PROMO1" />
              <input
                class="promo__submit"
                type="submit"
                value="SUBMIT"
                @click.stop="checkPromo(promoCode)"
                v-show="promoCode.value.length"
              />
            </div>
            <span
              class="promo__status promo__status_red"
              v-show="promoCode.isChecked && !promoCode.isActive && promoCode.value.length"
              >Invalid promo</span
            >
            <span
              class="promo__status promo__status_green"
              v-show="promoCode.isChecked && promoCode.isActive && promoCode.value.length"
              >Promo activated</span
            >
          </div>

          <button class="order-info__bttn bttn bttn_buy">Checkout</button>
        </div>
      </div>
    </section>
  </div>

  <page-loader v-if="$store.state.isLoading" />
</template>

<style scoped>
@import url('./views.css');
.game-list {
  grid-template-columns: repeat(2, minmax(450px, 0.5fr));
}
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

.promo {
  gap: var(--small-spacing);
  margin-bottom: var(--large-spacing);
}
.promo__block {
  position: relative;
  width: 100%;
}

.promo__input {
  width: 100%;
  border-radius: var(--small-radius);
  padding: 8px;
  line-height: 1;
  background-color: var(--main-white);
  color: var(--second-black);
  outline: none;
  border: none;
}
.promo__submit {
  position: absolute;
  right: 0;
  height: 100%;
  border-radius: 0 var(--small-radius) var(--small-radius) 0;
  padding: 8px;
  line-height: 1;
  background-color: var(--second-white);
  color: var(--second-black);
  outline: none;
  border: none;
}
.promo__status_green {
  color: #008000;
}
.promo__status_red {
  color: #d00000;
}

.order-info__bttn {
  width: 100%;
}

@media screen and (max-width: 1440px) {
  .game-list {
    grid-template-columns: 1fr;
  }
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
