<template>
  <div class="portfolio-list card-columns px-4">
    <vue-headful
      title="Vladimir Barkasov - Portfolio site of front-end developer"
    />
    <portfolio-card
      v-for="item in portfolioItems"
      v-bind:item="item"
      v-bind:key="item.id"
    ></portfolio-card>
  </div>
</template>

<script>
// import { reactive } from 'vue'
import PortfolioCard from '../components/PortfolioCard.vue'
import { getPortfolioItemsByTags } from '@/composables/portfolioItems'

export default {
  components: {
    PortfolioCard
  },
  setup () {
    /* const state = reactive({
      portfolioSorted: []
    })

    state.portfolioSorted = getPortfolioItemsByTags() */
    const portfolioItems = getPortfolioItemsByTags()

    return { portfolioItems }
  }
}
</script>

<style scoped>
</style>
