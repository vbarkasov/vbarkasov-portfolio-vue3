<template>
  <div class="px-4">
    <h1>Search results by tag: <span v-for="tag in tags" :key="tag">{{ tag }}</span></h1>
    <div class="portfolio-list card-columns">
      <portfolio-card
        v-for="result in results"
        :item="result"
        :key="result.id"
      ></portfolio-card>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '../components/PortfolioCard.vue'
import { usePortfolioItems } from '@/composables/portfolioItems'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMeta } from '@/composables/meta'

export default {
  components: {
    PortfolioCard
  },
  props: ['items'],
  setup () {
    const route = useRoute()
    const {
      getPortfolioItemsByTags
    } = usePortfolioItems()

    const {
      setTitle
    } = useMeta()

    const tags = computed(() => {
      let tags = decodeURIComponent(route.params.tags)
      if (tags) {
        tags = tags.split('&')
      }
      setTitle('Search results by tag: ' + tags.join(' '))
      return tags
    })

    const results = computed(() => {
      return getPortfolioItemsByTags(tags.value)
    })

    return { results, tags }
  }
}
</script>

<style scoped></style>
