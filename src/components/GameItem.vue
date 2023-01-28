<script setup>
//Components
import MetacriticScore from './MetacriticScore.vue'
import GamePlatforms from './GamePlatforms.vue'

const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="game-item">
    <v-lazy-image
      class="game-item__pic cursor-pointer"
      @click="$router.push(`/game/${game.id}`)"
      :alt="game.name"
      :imgSrc="game.background_image"
    />

    <div class="game-nav-bar flex flex_column">
      <div class="game-info flex flex_align-center">
        <game-platforms class="game-info__platform" :platforms="game.parent_platforms" />

        <metacritic-score class="game-info__score" :score="game.metacritic" />
      </div>

      <h3
        @click="$router.push(`/game/${game.id}`)"
        class="game-nav-bar__title main-white cursor-pointer"
      >
        {{ game.name }}
      </h3>

      <nav class="game-nav-bar__buttons buttons-block flex">
        <v-price-button
          class="buttons-block__price-bttn"
          :price="game.suggestions_count / 10"
          :gameName="game.name"
          :gameId="game.id"
        />

        <v-like-button class="buttons-block__like-bttn" :gameId="game.id" :gameName="game.name" />
      </nav>
    </div>
  </article>
</template>

<style scoped>
.game-item {
  width: 100%;
  border-radius: var(--medium-radius);
  background-color: var(--second-black);
}

.game-item__pic {
  width: 100%;
  height: 25vh;
  border-radius: var(--medium-radius) var(--medium-radius) 0 0;
}

.game-nav-bar {
  padding: var(--medium-spacing);
  gap: var(--medium-spacing);
}

.game-nav-bar__title {
  align-self: flex-start;
}

.game-nav-bar__title:hover {
  color: var(--main-blue);
}

.game-info {
  height: 26px;
}

.game-info__platform {
  height: 17px;
}

.game-info__score {
  margin-left: auto;
}

.buttons-block {
  gap: var(--small-spacing);
}

.buttons-block__price-bttn {
  width: 50%;
}

.buttons-block__like-bttn {
  width: 50%;
}
</style>
