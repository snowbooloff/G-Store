<script setup>
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
const nickDetails = ref(false)
const passwordDetails = ref(false)

const showPassowrd = ref(false)

function registeringUser() {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then((data) => {
      console.log(data)
      updateProfile(auth.currentUser, {
        displayName: userData.nickname
      })
      console.log(data)
    })
    .catch((error) => {
      const regexp = new RegExp(/[^\x2F][a-z,-]+(?=\x29)/g)
      let errorMessage = error.message.match(regexp)[0]
      errorMessage = errorMessage.replace(/-/g, ' ')
      errorMessage = errorMessage.replace(errorMessage[0], errorMessage[0].toUpperCase())
      userDataErrors.value.push(errorMessage)
    })
}

const userDataErrors = ref([])

function validateData() {
  if (userData.password != userData.repeatedPassword) {
    userDataErrors.value.push('Passwords don`t match')
  } else if (userData.nickname.length < 4) {
    userDataErrors.value.push('Nickname length is less than minimum')
  } else if (!userData.password.length) {
    userDataErrors.value.push('Missing password')
  } else {
    userDataErrors.value = []
    registeringUser()
  }
}
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <p class="page-block__title second-white">CREATE YOUR ACCOUNT</p>

    <div class="register">
      <p
        class="register__text second-white"
        @mouseover="nickDetails = true"
        @mouseleave="nickDetails = false"
      >
        <ins>Nickname:</ins>
        <v-modal-window v-show="nickDetails" class="register__window">
          <p class="main-black">Min length: 4</p>
          <p class="main-black">Max length: 12</p>
        </v-modal-window>
      </p>
      <v-input class="register__input" v-model="userData.nickname" type="text" maxlength="12" />
    </div>

    <div class="register">
      <p class="register__text second-white">Email Address:</p>

      <v-input class="register__input" v-model="userData.email" type="email" />
    </div>

    <div class="register">
      <p
        class="register__text second-white"
        @mouseover="passwordDetails = true"
        @mouseleave="passwordDetails = false"
      >
        <ins>Password:</ins>
        <v-modal-window v-show="passwordDetails" class="register__window">
          <p class="main-black">Min length: 6</p>
          <p class="main-black">Max length: 12</p>
        </v-modal-window>
      </p>
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

    <div class="register">
      <p class="register__text second-white">Repeat password:</p>
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
    <p class="page-block__error" v-for="error in userDataErrors">{{ error }}</p>
    <button
      class="page-block__bttn bttn bttn_buy"
      :class="{ shake: userDataErrors.length }"
      @click="validateData"
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
.page-block__error {
  color: #d00000;
}
.register__text {
  margin-bottom: var(--small-spacing);
  position: relative;
}
.register__window {
  bottom: 110%;
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
