<template>
  <div>
    <div class="static-content px-4 mx-auto">
      <div class="text-center">
        <img class="mb-4 img-fluid rounded" src="/static/img/popeye-vue.png" alt="front-end with vue"/>
      </div>
      <div>
        <h1 class="text-center">Front-end with Vue.js</h1>
        <p>
          Do you need create front-end for your site use one of modern front-end frameworks?
          Or do you need fast and cool single page application (SPA)?
          Choose <a href="https://vuejs.org/" target="_blank">Vue.js!</a>
        </p>

        <p>What is Vue.js? Vue.js is the progressive javascript framework for fast development.</p>

        <h2>Benefits of using Vue.js:</h2>
        <ul>
          <li>Development speed</li>
          <li>Ease of support</li>
          <li>Huge developer community</li>
          <li>Availability of ready-made themes and interface elements (I recommend <a href="https://vuetifyjs.com/"
                                                                                       target="_blank">Vuetify</a>)
          </li>
        </ul>
      </div>
      <h2 class="text-center">Examples:</h2>
      <div class="portfolio-list two-columns card-columns px-0 px-xs-6">
        <portfolio-card
          v-for="item in portfolioItems"
          v-bind:item="item"
          v-bind:key="item.id"
        ></portfolio-card>
      </div>
    </div>
  </div>
</template>

<script>
// Title: front-end with a Vue.js - Portfolio site of Vladimir Barkasov
import PortfolioCard from '../components/PortfolioCard.vue'
import { usePortfolioItems } from '@/composables/portfolioItems'

export default {
  components: {
    PortfolioCard
  },
  setup () {
    const {
      getPortfolioItemsByTags
    } = usePortfolioItems()

    const portfolioItems = getPortfolioItemsByTags(['vue'])
    return { portfolioItems }
  }
}
</script>

<style>
  @media (min-width: 576px) {
    .card-columns.two-columns {
      -webkit-column-count: 2;
      column-count: 2;
    }
  }
</style>
