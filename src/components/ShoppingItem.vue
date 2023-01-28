<script setup>
//Components
import GamePlatforms from '../components/GamePlatforms.vue'

const props = defineProps({
  game: {
    type: Object
    // required: true
  }
})
</script>

<template>
  <article class="cart-block flex">
    <v-lazy-image class="cart-block_img" :imgSrc="game.background_image" :alt="game.name" />

    <div class="cart_block__bar flex">
      <div class="cart-block__info flex flex-column">
        <h3
          @click="$router.push(`/game/${game.id}`)"
          class="cart-block__name main-white cursor-pointer"
          :title="game.name"
        >
          {{ game.name }}
        </h3>

        <game-platforms class="cart-block__icons" :platforms="game.parent_platforms" />

        <p class="cart-block__price main-blue">${{ game.suggestions_count / 10 }}</p>
      </div>

      <icon-cross class="cart-block__icon cursor-pointer main-white" @click="" />
      <!-- removeGame(game) -->
    </div>
  </article>
</template>

<style scoped>
.cart-block {
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

.cart-block__icon {
  height: 15px;
  min-width: 15px;
  color: var(--main-white);
}
.cart-block__icon:hover {
  color: var(--main-blue);
}
</style>
