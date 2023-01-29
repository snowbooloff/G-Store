<script setup>
import { inject } from 'vue'

//Components
import GamePlatforms from './GamePlatforms.vue'
import GameTitle from './GameTitle.vue'

const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})

const { removeGame } = inject('shoppingRemove')
</script>

<template>
  <article class="shopping-item flex">
    <v-lazy-image class="shopping-item_img" :imgSrc="game.background_image" :alt="game.name" />

    <div class="shopping-pannel flex">
      <div class="shopping-details flex flex_column">
        <game-title class="shopping-details__title" :gameId="game.id" :gameName="game.name" />

        <game-platforms class="shopping-details__platforms" :platforms="game.parent_platforms" />

        <h3 class="shopping-details__price main-blue">
          {{ game.suggestions_count == 0 ? 'Free' : '$' + game.suggestions_count / 10 }}
        </h3>
      </div>

      <button class="shopping-pannel__bttn cursor-pointer" @click="removeGame(game)">
        <icon-cross class="shopping-pannel__icon" />
      </button>
    </div>
  </article>
</template>

<style scoped>
.shopping-item {
  background: var(--second-black);
  border-radius: var(--medium-radius);
}

.shopping-item_img {
  aspect-ratio: 5 / 3;
  width: 200px;
  border-radius: var(--medium-radius) 0 0 var(--medium-radius);
}

.shopping-pannel {
  width: 100%;
  padding: var(--medium-spacing);
}

.shopping-details {
  width: 100%;
  gap: var(--medium-spacing);
  align-items: flex-start;
}

.shopping-details__price {
  margin-top: auto;
}

.shopping-details__platforms {
  height: 15px;
}
.shopping-pannel__bttn {
  background: transparent;
  border: 0;
  height: 15px;
  min-width: 15px;
}

.shopping-pannel__icon {
  color: var(--main-white);
}
.shopping-pannel__icon:hover {
  color: var(--main-blue);
}

@media screen and (max-width: 600px) {
  .shopping-item {
    flex-flow: column;
  }

  .shopping-item_img {
    aspect-ratio: 7 / 3;
    width: 100%;
    border-radius: var(--medium-radius) var(--medium-radius) 0 0;
  }
}
</style>
