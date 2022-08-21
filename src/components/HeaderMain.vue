<template>
  <header class="header px-4 pt-3 mx-auto">
    <div class="text-center">
      <router-link to="/">
        <img class="img-fluid" src="../assets/logo-fire.png">
      </router-link>
    </div>
    <div class="clearfix"></div>
  </header>
  <menu-main></menu-main>
</template>

<script>
import MenuMain from './MenuMain.vue'

export default {
  components: {
    MenuMain
  }
}
</script>

<style scoped></style>
