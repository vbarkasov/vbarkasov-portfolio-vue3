<template>
  <v-app>
    <Header></Header>
    <v-main class="container-fluid">
      <div class="row mb-3 content-container">
        <div class="col-12 p-0">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
        </div>
      </div>
    </v-main>
    <Footer></Footer>
    <SendMessagePopup></SendMessagePopup>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SendMessagePopup from '@/components/SendMessagePopup.vue'
import 'bootstrap/dist/css/bootstrap.css'
export default {
  components: {
    Header,
    Footer,
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
