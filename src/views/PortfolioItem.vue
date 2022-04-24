<template>
  <div>
    <div class="item-block pb-md-4 mx-auto text-center">
      <!--div> {{ 'Title: ' + pageTitle }}</div-->
      <h1>{{ item.title }}</h1>
      <p v-html="item.description"></p>

      <ul class="features-list">
        <li v-for="(feature, index) in item.features"
            :key="'feature_' + index"
            class="text-left">
          {{ feature }}
        </li>
      </ul>

      <div
        v-for="(link, index) in item.links"
        :key="'link_' + index"
        class="mb-3"
      >
        <a :href="link.href" target="_blank" class="btn btn-secondary">
          <fa-icon :icon="link.icon" />
          {{ link.title }}
          <fa-icon icon="external-link-alt" />
        </a>
      </div>

      <div class="mb-3">
        <router-link
          v-for="tag in item.tags"
          :key="tag"
          :to="{ name: 'Tags', params: { tags: tag }}"
          class="btn btn-light btn-sm mr-1 mb-1">
          {{ tag }}
        </router-link>
      </div>

      <swiper :options="swiperOption" v-if="hasMore1images(item)">
        <swiper-slide v-for="(image, index) in item.images" :key="`fruit-${index}`" class="mb-4">
          <img :src="image" alt="" class="img-thumbnail item-image"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

      <div v-else-if="hasExact1image(item)" class="mb-4">
          <img :src="item.images[0]" alt="" class="img-thumbnail item-image"/>
      </div>

      <div>
        <small class="text-muted">{{ item.timeText }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getPortfolioItemBySlug } from '@/composables/portfolioItems'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup () {
    const state = reactive({
      slug: ''
    })
    const route = useRoute()

    const swiperOption = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30
    }

    const item = computed(() => {
      return getPortfolioItemBySlug(route.params.itemSlug)
    })

    const pageTitle = computed(() => {
      return item.title + ' - Portfolio of Vladimir Barkasov'
    })

    /* watch('route.params.itemSlug', (slug) => {
      state.slug = slug
    }) */

    const hasMore1images = (item) => {
      return item &&
          item.images &&
          Object.prototype.hasOwnProperty.call(item.images, 'length') &&
          item.images.length > 1
    }

    const hasExact1image = (item) => {
      return item &&
          item.images &&
          Object.prototype.hasOwnProperty.call(item.images, 'length') &&
          item.images.length === 1
    }

    return { swiperOption, state, item, pageTitle, hasExact1image, hasMore1images }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 30px;
  }

  .item-block {
    max-width: 700px;
  }

  .item-image {
    max-width: 100%;
  }

  .features-list {
    display: inline-block;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 0;
    width: 40%;
    height: 100%;
    margin-top: 0;
  }

  .swiper-button-prev {
    background-position: left;
  }

  .swiper-button-next {
    background-position: right;
  }
</style>
