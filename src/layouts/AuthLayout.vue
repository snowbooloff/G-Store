<script setup lang="ts">
import { computed, watch } from 'vue'

//Utils
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

const isAuth = computed<boolean>(() => store.state.user.isAuth)

watch(isAuth, () => {
  if (isAuth) {
    router.push('/')
  }
})
</script>

<template>
  <div v-bind="$attrs">
    <section class="auth">
      <h1 class="auth__title">GSTORE</h1>
      <h2 class="auth__text main-white">JOIN THE WORLD OF GAMES</h2>
    </section>
    <slot></slot>
  </div>
</template>

<style scoped>
.auth {
  margin: var(--extra-large-spacing) 0 var(--large-spacing);
}
.auth__title {
  font-size: 2.5em;
  background: var(--main-blue);
  background: -webkit-linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  background: -moz-linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  background: -o-linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  background: linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a86ff",endColorstr="#00b4d8",GradientType=1);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.auth__title,
.auth__text {
  text-align: center;
}
</style>
