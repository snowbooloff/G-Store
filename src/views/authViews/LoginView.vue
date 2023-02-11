<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

//Composables
import correctErrorText from '@/composables/correctErrorText'

//Utils
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const userData = reactive({
  email: '',
  password: ''
})

function loginingUser() {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, userData.email, userData.password).catch((error) => {
    correctErrorText(error, loginError)
    setTimeout(() => (loginError.value = ''), 1000)
  })
}

const loginError = ref('')
watch(loginError, (newValue) => {
  if (newValue.length) {
    setTimeout(() => (loginError.value = ''), 1500)
  }
})
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <p class="page-block__title second-white">SIGN IN TO YOUR GSTORE ACCOUNT</p>

    <form class="auth-form flex flex flex_column">
      <div class="auth-area">
        <label class="auth-area__label second-white">Email Address:</label>
        <v-input
          class="auth-area__input"
          v-model="userData.email"
          v-focus
          type="email"
        />
      </div>

      <div class="auth-area">
        <label class="auth-area__label second-white">Password:</label>
        <v-password-input
          class="auth-area__input"
          v-model="userData.password"
          maxlength="12"
        />
      </div>
      <p
        class="error-info"
        v-show="loginError.length"
      >
        {{ loginError }}
      </p>
      <button
        class="auth-form__bttn bttn bttn_buy"
        :class="{ shake: loginError.length }"
        @click.prevent="loginingUser"
      >
        SIGN IN
      </button>
      <span class="auth-form__span second-white">
        New to GSTORE?
        <router-link
          to="/register"
          class="main-white"
          >Sign Up</router-link
        >
      </span>
      <span class="auth-form__span second-white">
        Need Help?
        <router-link
          to="/reset"
          class="main-white"
          >Reset Password</router-link
        >
      </span>
    </form>
  </section>
</template>

<style scoped>
@import url('./auth.css');
</style>
