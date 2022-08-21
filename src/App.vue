<template>
  <v-app>
    <header-main></header-main>
    <v-main class="container-fluid">
      <div class="row mb-3 content-container">
        <div class="col-12 pt-4 pb-0">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component"/>
            </transition>
          </router-view>
        </div>
      </div>
    </v-main>
    <footer-main></footer-main>
    <send-message-popup />
  </v-app>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import FooterMain from '@/components/FooterMain.vue'
import SendMessagePopup from '@/components/SendMessagePopup.vue'
import 'bootstrap/dist/css/bootstrap.css'
export default {
  components: {
    HeaderMain,
    FooterMain,
    SendMessagePopup
  }
}

</script>

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
