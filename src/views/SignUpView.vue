<script setup>
import { ref } from 'vue'

const userEmail = ref('')
const userPassword = ref('')
</script>

<template>
  <div class="page container pt-64px flex flex_column">
    <section class="page-block flex flex_column flex_align-center">
      <h1 class="page-block__title page-block__title_store main-blue">GSTORE</h1>
      <h2 class="page-block__title main-white">JOIN THE WORLD OF GAMES</h2>
    </section>
    <section class="page-block flex flex_column flex_align-center">
      <h3 class="page-block__title second-white">CREATE YOUR ACCOUNT</h3>
      <div>
        <p>Email Address:</p>
        <v-input v-model="userEmail" placeholder="Sas" />
      </div>

      <div>
        <p>Password:</p>
        <v-input v-model="userPassword" />
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('./views.css');
.page-block__title_store {
  font-size: 2.5em;
  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  background: -webkit-linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  background: linear-gradient(90deg, var(--main-blue) 0%, var(--second-blue) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3a86ff",endColorstr="#00b4d8",GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
