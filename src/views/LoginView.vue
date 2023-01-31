<script setup>
import { ref } from 'vue'

const userEmail = ref('')
const userPassword = ref('')
const showPassowrd = ref(false)
</script>

<template>
  <div class="page container pt-64px flex flex_column">
    <section class="page-block flex flex_column flex_align-center">
      <h1 class="page-block__title page-block__title_store main-blue">GSTORE</h1>
      <h2 class="page-block__title main-white">JOIN THE WORLD OF GAMES</h2>
    </section>
    <section class="page-block flex flex_column flex_align-center">
      <h3 class="page-block__title second-white">SIGN IN TO YOUR GSTORE ACCOUNT</h3>

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
        New to GSTORE? <router-link to="/signUp" class="main-white">Sign Up</router-link>
      </span>
    </section>
  </div>
</template>

<style scoped>
@import url('./views.css');
.page-block__title_store {
  font-size: 2.5em;
  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  background: -webkit-linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  background: linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a86ff",endColorstr="#00b4d8",GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
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
