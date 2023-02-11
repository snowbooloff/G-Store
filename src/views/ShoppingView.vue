<script setup lang="ts">
import { ref, reactive, watch, onMounted, computed, provide } from 'vue'

// TS Interfaces
import { IGame } from '@/ts/game.interface'
import { IPromo } from '@/ts/promo.interface'

//Components
import ItemsList from '@/components/ItemsList.vue'
import ShoppingItem from '@/components/ShoppingItem.vue'
import NavBarForEmpty from '@/components/NavBarForEmpty.vue'

//Composables
import fetchGameDetails from '@/composables/fetchGameDetails'
import checkPromo from '@/composables/checkPromoCode'

//Utils
import { localStorageUtil } from '../localStorage'
import { useStore } from 'vuex'

const store = useStore()

const shoppingList = ref<IGame[]>([])

onMounted(() => {
  const storageList = localStorageUtil.getList(localStorageUtil.shopping)

  if (storageList.length) {
    store.commit('loading/setLoading', true)

    storageList.forEach((gameId: string) => {
      const game = ref<IGame | any>([])

      fetchGameDetails(game, gameId)
        .then(() => {
          shoppingList.value.push(game.value)
        })
        .then(() => {
          if (gameId == storageList[storageList.length - 1]) {
            store.commit('loading/setLoading', false)
          }
        })
    })
  }
})

provide('shoppingRemove', {
  removeGame
})

function removeGame(game: IGame): void {
  const index = shoppingList.value.indexOf(game)
  shoppingList.value.splice(index, 1)
  localStorageUtil.placeItem(localStorageUtil.shopping, game.id)
  store.commit('notification/pushNotification', `${game.name}: removed from shopping cart`)
}

const promoCode = reactive<IPromo>({
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

const totalPrice = computed<string>(() => {
  let price = shoppingList.value.reduce((acc, elem) => (acc += elem.suggestions_count / 10), 0)
  if (promoCode.discountType == '%' && promoCode.isActive) {
    price = price - (price / 100) * promoCode.discount
  } else if (promoCode.discountType == '$' && promoCode.isActive) {
    price = price - promoCode.discount
  }
  return price.toFixed(2)
})
const salesTax = computed<string>(() => {
  return (+totalPrice.value / 79).toFixed(2)
})
const grandTotal = computed<string>(() => {
  return (+salesTax.value + +totalPrice.value).toFixed(2)
})

const loading = computed<boolean>(() => store.state.loading.isLoading)
</script>

<template>
  <section class="page-block flex flex_column">
    <h1 class="page-block__title main-white">
      Shopping Cart
      <span
        v-show="shoppingList.length"
        class="page-block__count main-blue"
        >({{ shoppingList.length }} items)</span
      >
    </h1>

    <div class="shopping-block flex">
      <items-list
        v-if="!loading && shoppingList.length"
        class="shopping-block__content game-list"
        :itemsList="shoppingList"
      >
        <template #item="slotProps">
          <shopping-item :game="slotProps.item" />
        </template>
      </items-list>
      <nav-bar-for-empty v-if="!loading && !shoppingList.length">
        Shopping list is empty
      </nav-bar-for-empty>

      <div
        class="order-info"
        v-if="shoppingList.length"
      >
        <div class="order-info__block flex flex_align-center">
          <h3 class="order-info__title main-white">Subtotal:</h3>
          <p class="order-info__price main-blue">${{ totalPrice }}</p>
          <p
            v-show="promoCode.isActive"
            class="order-info__discount main-white"
          >
            {{ '-' + promoCode.discountType + promoCode.discount }}
          </p>
        </div>

        <div class="order-info__block flex flex_align-center">
          <h3 class="order-info__title main-white">Sales Tax:</h3>
          <p class="order-info__price main-blue">${{ salesTax }}</p>
        </div>

        <div class="order-info__block flex flex_align-center">
          <h3 class="order-info__title main-white">Grand Total:</h3>
          <p class="order-info__price main-blue">${{ grandTotal }}</p>
        </div>

        <div class="promo flex flex_column">
          <h3 class="promo__title main-white">Redeem Promo Code:</h3>
          <v-input-submit
            class="promo__input"
            v-model="promoCode.value"
            maxlength="15"
            placeholder="PROMO1"
            :submitFunc="checkPromo"
            :funcArguments="promoCode"
          />
          <span
            class="promo__status promo__status_red"
            v-show="promoCode.isChecked && !promoCode.isActive"
            >Invalid promo</span
          >
          <span
            class="promo__status promo__status_green"
            v-show="promoCode.isChecked && promoCode.isActive"
            >Promo activated</span
          >
        </div>

        <button class="order-info__bttn bttn bttn_buy">Checkout</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
.order-info__price {
  margin-left: auto;
}
.order-info__discount {
  margin-left: var(--medium-spacing);
}

.promo {
  gap: var(--small-spacing);
  margin-bottom: var(--large-spacing);
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
