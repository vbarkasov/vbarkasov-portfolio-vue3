<template>
  <div class="card" :data-id="item.id">
    <router-link
      :to="{ name: 'PortfolioItem', params: { itemSlug: item.slug }}"
      v-on:click.native="scrollToTop"
    >
      <img class="card-img-top" :src="item.previewImage" :alt="item.title">
    </router-link>
    <div class="card-body">
      <h2 class="card-title">{{ item.title }}</h2>
      <p class="card-text" v-html="item.description"></p>
      <div class="mb-3">
        <router-link
          v-for="tag in item.tags"
          :key="tag"
          :to="{ name: 'Tags', params: { tags: tag }}"
          class="btn btn-light btn-sm mr-1 mb-1">
          {{ tag }}
        </router-link>
      </div>
      <p class="card-text time-text">
        <small class="text-muted">{{ item.timeText }}</small>
      </p>
      <router-link
        :to="{ name: 'PortfolioItem', params: { itemSlug: item.slug }}"
        class="btn btn-outline-primary"
        v-on:click.native="scrollToTop"
      >
        More info
      </router-link>
    </div>
  </div>
</template>

<script>
import { toRef } from 'vue'
import { scrollToTop } from '@/composables/scroll'

export default {
  props: {
    item: Object
  },
  setup(props) {
    const item = toRef(props, 'item')

    return {
      item,
      scrollToTop
    }
  }
}
</script>

<style scoped>
  .card .time-text {
    position: absolute;
    right: 20px;
    bottom: 3px;
  }
</style>
