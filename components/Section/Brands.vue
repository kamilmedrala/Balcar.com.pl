<template>
    <div class="swiper-brands-section">
      <SectionContent class="custom-container relative" :data="data" :titleInline="false" />
      <div v-if="data.gallery" class="w-full overflow-hidden">
        <div class="mx-auto custom-container h-20 md:h-[90px] overflow-visible">
          <div
            ref="swiper"
            class="swiper swiper-container h-full !overflow-visible"
          >
            <div class="swiper-wrapper items-center w-full h-full">
              <div
                class="swiper-slide pr-8 md:pr-10 xl:pr-20 !w-1/3 md:!w-1/5 h-full shrink-0 grow-0"
                v-for="image in data.gallery"
                :key="image.id"
              >
              <nuxt-picture
              v-if="image.full_image_url"
              class="h-full w-full relative transition duration-300"
              height="90"
              :src="image.full_image_url"
              :alt="image.title"
                      :fit="'contain'"
                      loading="lazy"
                      :imgAttrs="{ class: 'w-full h-full object-contain saturate-effect' }"
                      />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { Swiper, Autoplay, Lazy } from 'swiper';
  export default {
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        swiper: null,
        swiperOptionsObject: {
          slidesPerView: 'auto',
          modules: [ Autoplay, Lazy],
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          speed: 700,
          lazy: {
            loadPrevNext: true,
          },
          loop: true,
        },
      }
    },
    mounted() {
      this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject)
    },
  }
  </script>

<style scoped>
.swiper-brands-section:deep(.swiper-slide img ){
  @apply opacity-10 pointer-events-none 
}
.swiper-brands-section:deep(.swiper-slide-prev ~ .swiper-slide img){
  @apply opacity-50 pointer-events-auto hover:opacity-100
}
</style>