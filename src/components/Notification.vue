<script setup lang="ts">
import { computed, watch } from 'vue'

//Utils
import { useStore } from 'vuex'
const store = useStore()

const props = defineProps<{
  delay: number
}>()

const notificationList = computed<string[]>(() => store.state.notification.notificationList)
let notificationCount: number = 0

watch(notificationList.value, () => {
  if (notificationCount < notificationList.value.length) {
    setTimeout(() => store.commit('notification/removeNotification'), props.delay)
  }
  notificationCount = notificationList.value.length
})
</script>

<template>
  <div class="notification">
    <TransitionGroup name="list">
      <div
        class="notification__item main-white"
        v-for="notification in notificationList"
        :key="notification"
      >
        {{ notification }}
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.notification {
  position: fixed;
  z-index: 999;
  top: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-flow: column;
}
.notification__item {
  align-self: center;
  text-align: center;
  min-width: 350px;
  padding: var(--medium-spacing);
  background-color: var(--main-blue);
  border-radius: var(--small-radius);
  margin-bottom: var(--medium-spacing);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
