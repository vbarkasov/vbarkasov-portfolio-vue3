<template>
  <nav class="my-2 my-md-0 mr-md-3 text-center">
    <router-link
      v-for="(item, index) in menuItems"
      :to="item.href"
      @click.native="scrollToTop"
      class="p-2 text-dark"
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
