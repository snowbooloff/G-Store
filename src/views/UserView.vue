<script setup>
import { ref, computed } from 'vue'

//Components
import UserAvatar from '../components/UserAvatar.vue'
//Utils
import { useStore } from 'vuex'
const store = useStore()

const userData = computed(() => store.state.user.userInfo)
const correctedRegDate = computed(() =>
  new Date(userData.value.registrationDate).toLocaleDateString('en-GB')
)
const s = ref('')

const showNicknameInput = ref(false)

function sas(sas) {
  console.log(sas)
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
        @input="$store.dispatch('user/uploadUserPic', $event.target.files[0])"
      />
    </div>
    <div class="user-info flex flex_column">
      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Nickname:</h3>
        <button
          class="datails__bttn cursor-pointer"
          @click="showNicknameInput = !showNicknameInput"
        >
          <icon-edit class="datails__icon main-blue" />
        </button>

        <h3 class="datails__item main-blue">{{ userData.nickname }}</h3>
      </div>
      <v-input-submit
        v-if="showNicknameInput"
        class="input"
        placeholder="New Nickname"
        v-model="s"
        :submitFunc="sas"
        :funcArguments="'sas'"
      />

      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Email Address:</h3>
        <button
          class="datails__bttn cursor-pointer"
          @click="showNicknameInput = !showNicknameInput"
        >
          <icon-edit class="datails__icon main-blue" />
        </button>
        <h3 class="datails__item main-blue">{{ userData.email }}</h3>
      </div>
      <div class="details flex flex_align-center">
        <h3 class="datails__item main-white">Password:</h3>
        <button
          class="datails__bttn cursor-pointer"
          @click="showNicknameInput = !showNicknameInput"
        >
          <icon-edit class="datails__icon main-blue" />
        </button>
        <h3 class="datails__item main-blue">Change Password</h3>
      </div>
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
.user-info {
  width: 500px;
  gap: var(--medium-spacing);
  flex-wrap: wrap;
  padding: var(--large-spacing);
  background: var(--second-black);
  border-radius: var(--medium-radius);
}
.details {
}
.datails__bttn {
  border: none;
  background: none;
  margin-left: auto;
  margin-right: var(--small-spacing);
}
.datails__date {
  margin-left: auto;
}
.datails__icon {
  height: 17px;
}
</style>
