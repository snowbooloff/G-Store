<script setup lang="ts">
import { ref, reactive } from 'vue'

//Composables
import correctErrorText from '../../composables/correctErrorText'

//Utils
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()

const store = useStore()

const userData = reactive({
  email: '',
  nickname: '',
  password: '',
  repeatedPassword: ''
})

function registeringUser() {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then(() => {
      updateProfile(auth.currentUser!, {
        displayName: userData.nickname
      })
    })
    .catch((error) => {
      correctErrorText(error, registrationError)
    })
}

const registrationError = ref('')

function validateData() {
  if (userData.password != userData.repeatedPassword) {
    registrationError.value = 'Passwords don`t match'
  } else if (userData.nickname.length < 4) {
    registrationError.value = 'Nickname to be a minimum of 4 characters'
  } else if (!userData.password.length) {
    registrationError.value = 'Missing password'
  } else {
    registeringUser()
    setTimeout(() => (registrationError.value = ''), 1000)
  }
}
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <p class="page-block__title second-white">CREATE YOUR ACCOUNT</p>

    <form class="auth-form flex flex flex_column">
      <div class="auth-area">
        <label class="auth-area__label second-white">Nickname:</label>
        <v-input
          class="auth-area__input"
          v-model="userData.nickname"
          type="text"
          maxlength="12"
        />
      </div>

      <div class="auth-area">
        <label class="auth-area__label second-white">Email Address:</label>
        <v-input
          class="auth-area__input"
          v-model="userData.email"
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

      <div class="auth-area">
        <label class="auth-area__label second-white">Repeat password:</label>
        <v-password-input
          class="auth-area__input"
          v-model="userData.repeatedPassword"
          maxlength="12"
        />
      </div>
      <p
        class="page-block__error"
        v-show="registrationError.length"
      >
        {{ registrationError }}
      </p>
      <button
        class="page-block__bttn bttn bttn_buy"
        :class="{ shake: registrationError.length }"
        @click="validateData"
      >
        SIGN UP
      </button>
      <span class="auth-form__span second-white">
        Already have a GStore account?
        <router-link
          to="login"
          class="main-white"
          >Sign In</router-link
        >
      </span>
    </form>
  </section>
</template>

<style scoped>
@import url('./auth.css');
</style>