<template>
  <div class="portfolio-list card-columns px-12">
    <portfolio-card
      v-for="item in portfolioItems"
      :item="item"
      :key="item.id"
    ></portfolio-card>
  </div>
</template>

<script>
import PortfolioCard from '../components/PortfolioCard.vue'
import { usePortfolioItems } from '@/composables/portfolioItems'
import { useMeta } from '@/composables/meta'

export default {
  components: {
    PortfolioCard
  },
  setup () {
    const {
      getPortfolioItemsByTags
    } = usePortfolioItems()

    const {
      setTitle
    } = useMeta()

    setTitle()

    const portfolioItems = getPortfolioItemsByTags()
    return { portfolioItems }
  }
}
</script>

<style scoped>
</style>
