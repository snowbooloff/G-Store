<script setup lang="ts">
import { shallowRef, reactive } from 'vue'

//Components
import ErrorMessage from '@/components/ErrorMessage.vue'
import ShakeableWrapper from '@/components/ShakeableWrapper.vue'

//Composables
import correctErrorText from '@/composables/correctFirebaseError'

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
  })
}

const loginError = shallowRef<string>('')
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
      <error-message
        v-model:error-text="loginError"
        :delay="1500"
      />
      <shakeable-wrapper :condition="loginError.length">
        <button
          class="auth-form__bttn bttn bttn_buy"
          @click.prevent="loginingUser"
        >
          SIGN IN
        </button>
      </shakeable-wrapper>
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
