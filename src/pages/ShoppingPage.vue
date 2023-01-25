<script setup>
import { ref, onMounted, watch, computed } from "vue";

//Components
import GamePlatforms from "@/components/GamePlatforms.vue";

//Composables
import fetchGameDetails from "@/composables/fetchGameDetails.js";
import checkPromo from "@/composables/checkPromoCode.js";

//Utils
import { storageUtil } from "@/storage/localStorage";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();

const store = useStore();

const shoppingList = ref([]);

onMounted(() => {
  const storageList = storageUtil.getList(storageUtil.shopping);

  if (storageList) {
    store.commit("setLoading", true);

    storageList.forEach((gameId) => {
      const game = ref([]);

      fetchGameDetails(game, gameId, router)
        .then(() => {
          shoppingList.value.push(game.value);
        })
        .then(() => {
          if (gameId == storageList[storageList.length - 1]) {
            store.commit("setLoading", false);
          }
        });
    });
  }
});

function removeGame(gameItem) {
  const index = shoppingList.value.indexOf(gameItem);

  shoppingList.value.splice(index, 1);
  storageUtil.setGame(storageUtil.shopping, gameItem.id);
}

const promoCode = ref("");

function checkPromoCode() {
  console.log(promoCode.value);
  checkPromo();
}

const totalPrice = computed(() => {
  const price = shoppingList.value.reduce(
    (acc, elem) => (acc += elem.suggestions_count / 10),
    0
  );
  return price.toFixed(2);
});
const salesTax = computed(() => {
  return (totalPrice.value / 79).toFixed(2);
});
const grandTotal = computed(() => {
  return (+salesTax.value + +totalPrice.value).toFixed(2);
});
</script>

<template>
  <div class="page large-container pt-64px flex flex-column" v-if="!$store.state.isLoading">
    <section class="page-block flex flex-column">
      <h1 class="page-block__title main-white">
        Shopping Cart
        <span class="page-block__count main-blue">({{ shoppingList.length }} items)</span>
      </h1>

      <div class="shopping-block flex">
        <div class="shopping-block__content">
          <article class="cart-block flex" v-for="game in shoppingList" :key="game.id">
            <lazy-image class="cart-block_img" :imgSrc="game.background_image" :alt="game.name" />

            <div class="cart_block__bar flex">
              <div class="cart-block__info flex flex-column">
                <h3 @click="$router.push(`/game/${game.id}`)"
                  class="cart-block__name main-white cursor-pointer" :title="game.name">
                  {{ game.name }}
                </h3>

                <game-platforms class="cart-block__icons" :platforms="game.parent_platforms" />

                <p class="cart-block__price main-blue">
                  ${{ game.suggestions_count / 10 }}
                </p>
              </div>

              <div class="cart-block__remove cursor-pointer" @click="removeGame(game)"></div>
            </div>
          </article>
        </div>

        <div class="shopping-info">
          <div class="shopping-info__block flex flex-align-center flex-space-between">
            <h3 class="shopping-info_title main-white">Subtotal:</h3>
            <p class="shopping-info_price main-blue">${{ totalPrice }}</p>
          </div>

          <div class="shopping-info__block flex flex-align-center flex-space-between">
            <h3 class="shopping-info_title main-white">Sales Tax:</h3>
            <p class="shopping-info_price main-blue">${{ salesTax }}</p>
          </div>

          <div class="shopping-info__block flex flex-align-center flex-space-between">
            <h3 class="shopping-info_title main-white">Grand Total:</h3>
            <p class="shopping-info_total-price main-blue">${{ grandTotal }}</p>
          </div>

          <div class="shopping-info__promo flex flex-column">
            <h3 class="shopping-info_title main-white">Redeem Promo Code:</h3>
            <input class="shopping-info__input" v-model="promoCode" placeholder="PROMO1"
              @change="checkPromoCode" />
          </div>

          <button class="shopping-info__bttn bttn bttn_buy">Checkout</button>
        </div>
      </div>
    </section>
  </div>

  <c-loading v-else />
</template>

<style>
.shopping-block {
  align-items: flex-start;
  gap: var(--medium-spacing);
}

.shopping-block__content {
  width: 100%;
}

.cart-block {
  margin-bottom: var(--medium-spacing);
  background: var(--second-black);
  border-radius: var(--medium-radius);
}

.cart-block_img {
  min-height: 120px;
  max-width: 200px;
  border-radius: var(--medium-radius) 0 0 var(--medium-radius);
}

.cart_block__bar {
  width: 100%;
  padding: var(--medium-spacing);
}

.cart-block__info {
  width: 100%;
  gap: var(--small-spacing);
  align-items: flex-start;
}

.cart-block__name:hover {
  color: var(--main-blue);
}

.cart-block__price {
  margin-top: auto;
}

.cart-block__icons {
  height: 15px;
}

.cart-block__remove {
  background-image: url("@/assets/icons/cross.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 15px;
  min-width: 15px;
}

.shopping-info {
  min-width: 380px;
  margin-left: auto;
  padding: var(--large-spacing);
  background: var(--second-black);
  border-radius: var(--medium-radius);
}

.shopping-info__block {
  margin-bottom: var(--large-spacing);
  padding-bottom: 2px;
  border-bottom: 2px solid var(--main-black);
}

.shopping-info__promo {
  gap: var(--small-spacing);
  margin-bottom: var(--large-spacing);
}

.shopping-info__input {
  width: 100%;
  border-radius: var(--small-radius);
  font-size: 14px;
  padding: 8px;
  line-height: 14px;
  background-color: var(--main-white);
  outline: none;
  border: none;
}

.shopping-info__bttn {
  width: 100%;
}

@media screen and (max-width: 1024px) {
  .shopping-block {
    flex-flow: column-reverse;
  }

  .shopping-info {
    min-width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .cart-block {
    flex-flow: column;
  }

  .cart-block_img {
    height: 250px;
    max-width: 100%;
    border-radius: var(--medium-radius) var(--medium-radius) 0 0;
  }
}
</style>
