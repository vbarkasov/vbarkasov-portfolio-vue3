<template>
  <div class="px-4">
    <!--div>{{ 'Title: ' + pageTitle}}</div-->
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
import { usePortfolioItems } from '@/composables/portfolioItems'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  props: ['items'],
  components: {
    PortfolioCard
  },
  setup () {
    const route = useRoute()
    const {
      getPortfolioItemsByTags
    } = usePortfolioItems()

    const tags = computed(() => {
      let tags = decodeURIComponent(route.params.tags)
      if (tags) {
        tags = tags.split('&')
      }
      return tags
    })

    const results = computed(() => {
      return getPortfolioItemsByTags(tags.value)
    })

    const pageTitle = computed (() => {
      return tags.value.join(' ') + ' - Portfolio site of Vladimir Barkasov'
    })

    return { results, pageTitle, tags }
  }
}
</script>

<style scoped></style>
