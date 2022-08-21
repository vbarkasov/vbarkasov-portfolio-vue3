<template>
  <nav class="header-menu my-2 my-md-0 mr-md-3 text-center">
    <router-link
      v-for="(item, index) in menuItems"
      :to="item.href"
      @click.prevent="scrollToTop"
      class="header-menu__item text-dark px-2 py-0 py-md-2"
      :key="`top-menu-link-${index}`"
    >
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script>
import { useScroll } from '@/composables/scroll'

export default {
  setup () {
    const {
      scrollToTop
    } = useScroll()

    const menuItems = [
      {
        title: 'Portfolio',
        href: '/'
      },
      {
        title: 'Front-end with Vue.js',
        href: '/page/front-end-vue'
      },
      {
        title: 'Browser Extensions',
        href: '/page/browser-extensions-development'
      },
      {
        title: 'About me',
        href: '/page/about'
      },
      {
        title: 'Contact',
        href: '/page/contacts'
      }
    ]

    return { menuItems, scrollToTop }
  }
}
</script>

<style scoped>
  .header-menu {
    position: sticky;
    top: 0;
    background: rgba(255,255,255,0.8);
    z-index: 5;
  }

  .header-menu__item {
    font-weight: bold;
  }
</style>
