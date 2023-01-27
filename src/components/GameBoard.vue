<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  game: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="game-board cursor-pointer">
    <v-lazy-image class="game-board__img" :imgSrc="game.background_image" :alt="game.name" />

    <div class="game-board__info">
      <h1 class="game-board__name main-white">{{ game.name }}</h1>

      <h3 class="game-board__genres second-white" v-for="genre in game.genres" :key="genre['name']">
        {{ genre['name'] }}
      </h3>
    </div>
  </article>
</template>

<style scoped>
.game-board {
  position: relative;
  width: 100%;
  height: calc(350px + (800 - 350) * ((100vw - 250px) / (1920 - 250)));
  background-color: var(--second-black);
  border-radius: var(--medium-radius);
}

.game-board__img {
  height: 100%;
  border-radius: var(--medium-radius);
}

.game-board__info {
  position: absolute;
  width: 100%;
  padding: var(--large-spacing);
  bottom: 0;
  left: 0;
  border-radius: 0 0 var(--medium-radius) var(--medium-radius);

  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(0deg, var(--second-black) 0%, var(--translucent-black) 100%);
  background: -webkit-linear-gradient(0deg, var(--second-black) 0%, var(--translucent-black) 100%);
  background: linear-gradient(0deg, var(--second-black) 0%, var(--translucent-black) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#212529", endColorstr="#212529ef", GradientType=1);
}

.game-board__platforms {
  margin-top: var(--small-spacing);
  height: 25px;
}

.game-board__genres {
  display: inline;
  margin-right: var(--medium-spacing);
}
</style>
