<script setup lang="ts">
import { ref, computed, reactive } from 'vue'

//Components
import UserAvatar from '../components/UserAvatar.vue'

//Composables
import correctErrorText from '../composables/correctErrorText'

//Utils
import { getAuth, updateProfile, updatePassword, updateEmail } from 'firebase/auth'
import { ref as FRef, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useStore } from 'vuex'
const store = useStore()

const userData = computed(() => store.state.user.userInfo)
const correctedRegDate = computed(() =>
  new Date(userData.value.registrationDate).toLocaleDateString('en-GB')
)

const newUserData = reactive({
  email: '',
  nickname: '',
  password: ''
})

const inputData = reactive({
  isEmailInputShow: false,
  isNicknameInputShow: false,
  isPasswordInputShow: false
})

const updateError = ref('')

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

        store.commit('notification/pushNotification', 'Profile image successfully uploaded', {
          root: true
        })
      })
    })
  }
}

function updateUserNickname() {
  if (newUserData.nickname.length < 4) {
    updateError.value = 'Nickname to be a minimum of 4 characters'
  } else {
    const auth = getAuth()
    updateProfile(auth.currentUser!, {
      displayName: newUserData.nickname
    })
      .then(() => {
        store.commit('user/setUserNickname', newUserData.nickname)
        store.commit('notification/pushNotification', 'Nnickname successfully updated')
      })
      .catch((error) => {
        correctErrorText(error, updateError)
      })
  }

  setTimeout(() => (updateError.value = ''), 1000)
}

function updateUserEmail() {
  const auth = getAuth()
  updateEmail(auth.currentUser!, newUserData.email)
    .then(() => {
      store.commit('user/setUserEmail', newUserData.email)
      store.commit('notification/pushNotification', 'Email Address successfully updated')
    })
    .catch((error) => {
      correctErrorText(error, updateError)
    })
  setTimeout(() => (updateError.value = ''), 1000)
}

function updateUserPassword() {
  const auth = getAuth()
  updatePassword(auth.currentUser!, newUserData.password)
    .then(() => {
      store.commit('notification/pushNotification', 'Password successfully updated')
    })
    .catch((error) => {
      correctErrorText(error, updateError)
    })
  setTimeout(() => (updateError.value = ''), 1000)
}
</script>

<template>
  <section class="page-block flex flex_column flex_align-center">
    <div class="profile-avatar">
      <user-avatar :size="'15vw'" />
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
        <div class="edit flex">
          <button
            class="edit__bttn cursor-pointer"
            @click="inputData.isNicknameInputShow = !inputData.isNicknameInputShow"
          >
            <icon-edit class="edit__icon main-blue" />
          </button>
          <h3 class="edit__item main-blue">{{ userData.nickname }}</h3>
        </div>
      </div>

      <v-input-submit
        v-if="inputData.isNicknameInputShow"
        v-model="newUserData.nickname"
        type="text"
        maxlength="12"
        placeholder="New Nickname"
        :submitFunc="updateUserNickname"
      />

      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Email Address:</h3>
        <div class="edit flex">
          <button
            class="edit__bttn cursor-pointer"
            @click="inputData.isEmailInputShow = !inputData.isEmailInputShow"
          >
            <icon-edit class="edit__icon main-blue" />
          </button>
          <h3 class="edit__item main-blue">{{ userData.email }}</h3>
        </div>
      </div>

      <v-input-submit
        v-if="inputData.isEmailInputShow"
        v-model="newUserData.email"
        type="email"
        placeholder="New Email Address"
        :submitFunc="updateUserEmail"
      />

      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Password:</h3>
        <div class="edit flex">
          <button
            class="edit__bttn cursor-pointer"
            @click="inputData.isPasswordInputShow = !inputData.isPasswordInputShow"
          >
            <icon-edit class="edit__icon main-blue" />
          </button>
          <h3 class="edit__item main-blue">Change Password</h3>
        </div>
      </div>

      <v-input-submit
        v-if="inputData.isPasswordInputShow"
        v-model="newUserData.password"
        type="text"
        maxlength="12"
        placeholder="New Password"
        :submitFunc="updateUserPassword"
      />

      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Registration Date:</h3>
        <h3 class="datails__date main-blue">{{ correctedRegDate }}</h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-avatar {
  aspect-ratio: 1 / 1;
  width: 15vw;
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
.datails__date,
.edit {
  margin-left: auto;
}

.edit__bttn {
  border: none;
  background: none;
  margin-left: auto;
  margin-right: var(--small-spacing);
}
.edit__icon {
  height: 17px;
}

@media (max-width: 525px) {
  .user-info {
    width: 100%;
  }
}
@media (max-width: 375px) {
  .details {
    flex-flow: column;
    gap: var(--small-spacing);
  }
  .edit,
  .datails__date,
  .edit {
    margin-left: 0;
  }
}
</style>
