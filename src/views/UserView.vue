<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'

//Components
import UserAvatar from '@/components/UserAvatar.vue'

//Composables
import correctErrorText from '@/composables/correctErrorText'

//Utils
import { getAuth, updateProfile, updatePassword, updateEmail } from 'firebase/auth'
import { ref as FRef, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useStore } from 'vuex'
const store = useStore()

const userData = computed(() => store.state.user.userInfo)

const correctedRegDate = computed(() =>
  new Date(userData.value.registrationDate).toLocaleDateString('en-GB')
)

const updateError = ref<string>('')
watch(updateError, (newValue) => {
  if (newValue.length) {
    setTimeout(() => (updateError.value = ''), 1500)
  }
})

interface InputData {
  nicknameInput: Input
  emailInput: Input
  passwordInput: Input
}

interface Input {
  isShow: boolean
  value: string
}

const inputData = reactive<InputData>({
  nicknameInput: {
    isShow: false,
    value: ''
  },
  emailInput: {
    isShow: false,
    value: ''
  },
  passwordInput: {
    isShow: false,
    value: ''
  }
})

function showCurrentInput(currentInput: Input) {
  currentInput.isShow = !currentInput.isShow
  const inputsArr = Object.values(inputData)

  for (let i = 0; i < inputsArr.length; i++) {
    if (inputsArr[i] == currentInput) {
      continue
    }
    inputsArr[i].isShow = false
    inputsArr[i].value = ''
  }
}

function updateProfileImage(userPic: any) {
  if (userPic) {
    const auth = getAuth()
    const storage = getStorage()

    const pictureRef = FRef(storage, `userAvatars/${auth.currentUser!.uid}/avatar`)

    uploadBytes(pictureRef, userPic).then(() => {
      getDownloadURL(pictureRef).then((url) => {
        updateProfile(auth.currentUser!, {
          photoURL: url
        })
        store.commit('user/setUserImage', url)
        store.commit('notification/pushNotification', 'Profile image successfully uploaded')
      })
    })
  }
}

function updateUserNickname() {
  if (inputData.nicknameInput.value.length < 4) {
    updateError.value = 'Nickname to be a minimum of 4 characters'
  } else {
    const auth = getAuth()
    updateProfile(auth.currentUser!, {
      displayName: inputData.nicknameInput.value
    })
      .then(() => {
        store.commit('user/setUserNickname', inputData.nicknameInput.value)
        store.commit('notification/pushNotification', 'Nickname successfully updated')
        clearUserData()
      })
      .catch((error) => {
        correctErrorText(error, updateError)
      })
  }
}

function updateUserEmail() {
  const auth = getAuth()
  updateEmail(auth.currentUser!, inputData.emailInput.value)
    .then(() => {
      store.commit('user/setUserEmail', inputData.emailInput.value)
      store.commit('notification/pushNotification', 'Email Address successfully updated')
      clearUserData()
    })
    .catch((error) => {
      correctErrorText(error, updateError)
    })
}

function updateUserPassword() {
  const auth = getAuth()
  updatePassword(auth.currentUser!, inputData.passwordInput.value)
    .then(() => {
      store.commit('notification/pushNotification', 'Password successfully updated')
      clearUserData()
    })
    .catch((error) => {
      correctErrorText(error, updateError)
    })
}

function clearUserData() {
  inputData.nicknameInput.value = ''
  inputData.nicknameInput.isShow = false
  inputData.emailInput.value = ''
  inputData.emailInput.isShow = false
  inputData.passwordInput.value = ''
  inputData.passwordInput.isShow = false
}
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <div class="profile-avatar">
      <user-avatar :size="'200px'" />
      <input
        class="profile-avatar__input cursor-pointer"
        type="file"
        accept="image/png, image/jpeg"
        @input="updateProfileImage($event.target.files[0])"
      />
    </div>

    <p
      class="page-block__error"
      v-show="updateError.length"
    >
      {{ updateError }}
    </p>

    <div class="user-info flex flex_column">
      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Nickname:</h3>
        <h3
          class="datails__text main-blue cursor-pointer"
          @click="showCurrentInput(inputData.nicknameInput)"
        >
          <ins>{{ userData.nickname }}</ins>
        </h3>
      </div>

      <v-input-submit
        v-if="inputData.nicknameInput.isShow"
        v-model="inputData.nicknameInput.value"
        :submitFunc="updateUserNickname"
        :class="{ shake: updateError.length }"
        type="text"
        maxlength="12"
        placeholder="New Nickname"
      />

      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Email Address:</h3>
        <h3
          class="datails__text main-blue cursor-pointer"
          @click="showCurrentInput(inputData.emailInput)"
        >
          <ins>{{ userData.email }}</ins>
        </h3>
      </div>

      <v-input-submit
        v-if="inputData.emailInput.isShow"
        :class="{ shake: updateError.length }"
        v-model="inputData.emailInput.value"
        type="email"
        placeholder="New Email Address"
        :submitFunc="updateUserEmail"
      />

      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Password:</h3>
        <h3
          class="datails__text main-blue cursor-pointer"
          @click="showCurrentInput(inputData.passwordInput)"
        >
          <ins>Change Password</ins>
        </h3>
      </div>

      <v-input-submit
        v-if="inputData.passwordInput.isShow"
        :class="{ shake: updateError.length }"
        v-model="inputData.passwordInput.value"
        type="text"
        maxlength="12"
        placeholder="New Password"
        :submitFunc="updateUserPassword"
      />

      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Registration Date:</h3>
        <h3 class="datails__text main-blue">{{ correctedRegDate }}</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-avatar {
  aspect-ratio: 1 / 1;
  width: 200px;
  position: relative;
}
.profile-avatar:hover {
  filter: brightness(0.5);
}

.profile-avatar__input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.page-block__error {
  color: #d00000;
}
.user-info {
  width: 500px;
  gap: var(--medium-spacing);
  flex-wrap: wrap;
  padding: var(--large-spacing);
  background: var(--second-black);
  border-radius: var(--medium-radius);
}

.datails__text {
  margin-left: auto;
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

@media (max-width: 525px) {
  .user-info {
    width: 100%;
  }
}
@media (max-width: 375px) {
  .user-info {
    padding: var(--medium-spacing);
  }
  .details {
    flex-flow: column;
    align-items: flex-start;
    gap: var(--small-spacing);
  }

  .datails__text {
    margin-left: 0;
  }
}
</style>
