<script setup>
import { ref, reactive } from 'vue'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const userData = reactive({
  email: '',
  password: ''
})

const showPassowrd = ref(false)

function loginingUser() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, userData.email, userData.password).catch((error) => {
    const regexp = new RegExp(/[^\x2F][a-z,-]+(?=\x29)/g)
    let errorMessage = error.message.match(regexp)[0]
    errorMessage = errorMessage.replace(/-/g, ' ')
    errorMessage = errorMessage.replace(errorMessage[0], errorMessage[0].toUpperCase())
    registrationError.value = errorMessage
    setTimeout(() => (registrationError.value = ''), 1000)
  })
}

const registrationError = ref('')
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <p class="page-block__title second-white">SIGN IN TO YOUR GSTORE ACCOUNT</p>

    <div class="auth">
      <p class="auth__text second-white">Email Address:</p>
      <v-input class="auth__input" v-model="userData.email" type="email" />
    </div>

    <div class="auth">
      <p class="auth__text second-white">Password:</p>
      <div class="password">
        <v-input
          class="password__input"
          v-model="userData.password"
          :type="showPassowrd ? 'text' : 'password'"
          maxlength="12"
        />
        <icon-eye
          class="password__icon"
          :class="showPassowrd ? 'main-blue' : 'main-black'"
          @click="showPassowrd = !showPassowrd"
        />
      </div>
    </div>
    <p class="page-block__error" v-show="registrationError.length">{{ registrationError }}</p>
    <button
      class="page-block__bttn bttn bttn_buy"
      :class="{ shake: registrationError.length }"
      @click="loginingUser"
    >
      SIGN IN
    </button>
    <span class="second-white">
      New to GSTORE? <router-link to="/register" class="main-white">Sign Up</router-link>
    </span>
  </section>
</template>

<style scoped>
.page-block__error {
  color: #d00000;
}
.auth__text {
  margin-bottom: var(--small-spacing);
}
.auth__input {
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
