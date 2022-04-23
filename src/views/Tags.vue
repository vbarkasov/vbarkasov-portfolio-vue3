<template>
  <div class="px-4">
    <vue-headful
      :title="pageTitle"
    />
    <h1>Search results by tag: <span v-for="tag in tags" :key="tag">{{ tag }}</span></h1>
    <div class="portfolio-list card-columns">
      <portfolio-card
        v-for="result in results"
        v-bind:item="result"
        v-bind:key="result.id"
      ></portfolio-card>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '../components/PortfolioCard.vue'
import { getPortfolioItemsByTags } from '@/composables/portfolioItems'
import { computed } from 'vue'

export default {
  props: ['items'],
  components: {
    PortfolioCard
  },
  setup () {
    const tags = computed(() => {
      let tags = decodeURIComponent(this.$route.params.tags)
      if (tags) {
        tags = tags.split('&')
      }
      return tags
    })

    const results = computed(() => {
      return getPortfolioItemsByTags(tags)
    })

    const pageTitle = computed (() => {
      return tags.join(' ') + ' - Portfolio site of Vladimir Barkasov'
    })

    return { results, pageTitle, tags }
  }
}
</script>

<style scoped></style>
