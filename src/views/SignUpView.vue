<script setup>
import { ref } from 'vue'
const noActivated = ref(false)

const userEmail = ref('')
const userPassword = ref('')
const showPassowrd = ref(false)
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <p class="page-block__title second-white"><ins>CREATE YOUR ACCOUNT</ins></p>

    <div class="register">
      <p class="register__text second-white">Nickname:</p>
      <v-input class="register__input" v-model="userEmail" type="text" />
    </div>

    <div class="register">
      <p class="register__text second-white">Email Address:</p>
      <v-input class="register__input" v-model="userEmail" type="email" />
    </div>

    <div class="register">
      <p class="register__text second-white">Password:</p>
      <div class="password">
        <v-input
          class="password__input"
          v-model="userPassword"
          :type="showPassowrd ? 'text' : 'password'"
        />
        <icon-eye
          class="password__icon"
          :class="showPassowrd ? 'main-blue' : 'main-black'"
          @click="showPassowrd = !showPassowrd"
        />
      </div>
    </div>

    <div class="register">
      <p class="register__text second-white">Repeat password:</p>
      <div class="password">
        <v-input
          class="password__input"
          v-model="userPassword"
          :type="showPassowrd ? 'text' : 'password'"
        />
        <icon-eye
          class="password__icon"
          :class="showPassowrd ? 'main-blue' : 'main-black'"
          @click="showPassowrd = !showPassowrd"
        />
      </div>
    </div>
    <button
      class="page-block__bttn bttn bttn_buy"
      :class="{ shake: noActivated }"
      @click="noActivated = !noActivated"
    >
      SIGN UP
    </button>
    <span class="second-white">
      Already have a GStore account?
      <router-link to="login" class="main-white">Sign In</router-link>
    </span>
  </section>
</template>

<style scoped>
@import url('./views.css');

.register__text {
  margin-bottom: var(--small-spacing);
}
.register__input {
  width: 300px;
}

.password {
  width: 300px;
  position: relative;
}
.password__icon {
  position: absolute;
  cursor: pointer;
  padding: 8px;
  height: 100%;
  width: 32px;
  right: 0;
}
.page-block__bttn {
  width: 300px;
}
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
