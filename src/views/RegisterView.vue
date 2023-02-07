<script setup lang="ts">
import { ref, reactive } from 'vue'

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

const showPassowrd = ref(false)

function registeringUser() {
  const auth = getAuth()
  console.log(auth)
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then((data) => {
      console.log(auth)
      updateProfile(auth.currentUser!, {
        displayName: userData.nickname
      })
    })
    .catch((error) => {
      const regexp = new RegExp(/[^\x2F][a-z,-]+(?=\x29)/g)
      let errorMessage = error.message.match(regexp)[0]
      errorMessage = errorMessage.replace(/-/g, ' ')
      errorMessage = errorMessage.replace(errorMessage[0], errorMessage[0].toUpperCase())
      registrationError.value = errorMessage
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

    <div class="auth">
      <p class="auth__text second-white">Nickname:</p>
      <v-input
        class="auth__input"
        v-model="userData.nickname"
        type="text"
        maxlength="12"
      />
    </div>

    <div class="auth">
      <p class="auth__text second-white">Email Address:</p>
      <v-input
        class="auth__input"
        v-model="userData.email"
        type="email"
      />
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

    <div class="auth">
      <p class="auth__text second-white">Repeat password:</p>
      <div class="password">
        <v-input
          class="password__input"
          v-model="userData.repeatedPassword"
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
    <span class="second-white">
      Already have a GStore account?
      <router-link
        to="login"
        class="main-white"
        >Sign In</router-link
      >
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
