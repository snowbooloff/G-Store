<script setup>
import { ref } from 'vue'

const userEmail = ref('')
const userPassword = ref('')
const repeatedPassword = ref('')
const showPassowrd = ref(false)
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <p class="page-block__title second-white"><ins>SIGN IN TO YOUR GSTORE ACCOUNT</ins></p>

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

    <button class="page-block__bttn bttn bttn_buy">SIGN IN</button>
    <span class="second-white">
      New to GSTORE? <router-link to="/register" class="main-white">Sign Up</router-link>
    </span>
  </section>
</template>

<style scoped>
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
</style>
