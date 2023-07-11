<template>
    <div class="hero-main-container flex flex-col justify-end relative w-full h-[70vh] md:h-[80vh] max-h-[600px] min-h-[300px] overflow-hidden">
      
      <div class="absolute inset-0">
        <div ref="swiper" class="swiper swiper-container w-full h-full">
          <div class="swiper-wrapper w-full h-full">
            <div class="swiper-slide w-full h-full" v-for="image in data" :key="image.id">
              <EffectParallax :parallaxOffset="150">
                <nuxt-picture v-if="image.full_image_url"
                  class="h-full w-full "
                  :src="image.full_image_url"
                  :fit="'cover'"
                  :imgAttrs="{class: 'w-full h-full object-cover'}"
                />
              </EffectParallax>
            </div>
          </div>
        </div>
      </div>

      <div class="custom-container realtive z-10 pointer-events-none hidden md:flex justify-between items-end">
        <CommonLogoBig :hasBg="true" class="pointer-events-auto shrink-0" />
        <div class="pointer-events-auto swiper-pagination !relative grow-0 mb-10 flex justify-end items-end bottom-0"></div>
      </div>
    </div>

</template>

<script>
import { Swiper, Navigation, Pagination, Autoplay, EffectFade } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    props:{
        data:{
            type: Array,
            required: true
        }
    },
    data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [EffectFade, Navigation, Autoplay, Pagination],
        effect: "fade",
        slidesPerView: 'auto',
        centeredSlides: true,
        grabCursor: 'true',
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
          nextEl: '.swiperGallery-next',
          prevEl: '.swiperGallery-prev',
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject)
  },
}
</script>

<style scoped>

.hero-main-container >>> span.swiper-pagination-bullet{
  @apply h-[3px] basis-10 2xl:basis-14 rounded-none !bg-white/50 opacity-100 transition-all duration-300
}

.hero-main-container >>> .swiper-pagination-bullet.swiper-pagination-bullet-active{
  @apply h-1.5 !bg-gray-lightest
}

</style>