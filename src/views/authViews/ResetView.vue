<script setup lang="ts">
import { ref, watch } from 'vue'

//Composables
import correctErrorText from '@/composables/correctErrorText'

//Utils
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { useStore } from 'vuex'
const store = useStore()

const userEmail = ref('')

function loginingUser() {
  const auth = getAuth()
  sendPasswordResetEmail(auth, userEmail.value)
    .then(() => {
      store.commit(
        'notification/pushNotification',
        'Password recovery instructions have been sent to the registered email address'
      )
    })
    .catch((error) => {
      correctErrorText(error, resetError)
    })
}

const resetError = ref('')
watch(resetError, (newValue) => {
  if (newValue.length) {
    setTimeout(() => (resetError.value = ''), 1500)
  }
})
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <p class="page-block__title second-white">FORGET PASSWORD? ENTER YOUR EMAIL TO RESET IT</p>

    <form class="auth-form flex flex flex_column">
      <div class="auth-area">
        <label class="auth-area__label second-white">Email Address:</label>
        <v-input
          class="auth-area__input"
          v-model="userEmail"
          v-focus
          type="email"
        />
      </div>

      <p
        class="error-info"
        v-show="resetError.length"
      >
        {{ resetError }}
      </p>
      <button
        class="auth-form__bttn bttn bttn_buy"
        :class="{ shake: resetError.length }"
        @click.prevent="loginingUser"
      >
        RESET PASSWORD
      </button>
    </form>
  </section>
</template>

<style scoped>
@import url('./auth.css');
</style>
