import { createRouter, createWebHistory } from 'vue-router'
import Portfolio from '@/views/Portfolio.vue'
import PortfolioItem from '@/views/PortfolioItem.vue'
import Tags from '@/views/Tags.vue'
import About from '@/views/About.vue'
import Contacts from '@/views/Contacts.vue'
import Extensions from '@/views/Extensions.vue'
import Frontend from '@/views/Frontend.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:itemSlug',
      name: 'PortfolioItem',
      component: PortfolioItem
    },
    {
      path: '/tags/:tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/page/about',
      name: 'About',
      component: About
    },
    {
      path: '/page/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/page/browser-extensions-development',
      name: 'Extensions',
      component: Extensions
    },
    {
      path: '/page/front-end-vue',
      name: 'Frontend',
      component: Frontend
    }
  ]
})

export default router
