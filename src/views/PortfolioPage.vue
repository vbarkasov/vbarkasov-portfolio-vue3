<template>
  <div class="portfolio-list card-columns px-12">
    <portfolio-card
      v-for="item in portfolioItems"
      v-bind:item="item"
      v-bind:key="item.id"
    ></portfolio-card>
  </div>
</template>

<script>
// title: 'Vladimir Barkasov - Portfolio site of front-end developer',
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

    const portfolioItems = getPortfolioItemsByTags()
    return { portfolioItems }
  }
}
</script>

<style scoped>
</style>
