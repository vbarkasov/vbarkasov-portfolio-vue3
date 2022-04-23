<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SendMessagePopup from '@/components/SendMessagePopup.vue'
import 'bootstrap/dist/css/bootstrap.css'
</script>

<template>
  <v-app>
    <Header></Header>
    <v-main class="container-fluid">
      <div class="row mb-3 content-container">
        <div class="col-12 p-0">
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </v-main>
    <Footer></Footer>
    <SendMessagePopup></SendMessagePopup>
  </v-app>
</template>

<style lang="scss">
@import '@/assets/main.scss';

.card {
  border: 1px solid rgba(0,0,0,.3)
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
