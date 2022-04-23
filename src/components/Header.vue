<template>
  <div>
    <header class="header px-4 py-3 mx-auto">
      <div class="text-center">
        <router-link to="/">
          <img class="img-fluid" src="../assets/logo-fire.png">
        </router-link>
      </div>
      <MenuMain></MenuMain>
      <div class="clearfix"></div>
    </header>
  </div>
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
