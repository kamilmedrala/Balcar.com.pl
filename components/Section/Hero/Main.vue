<template>
    <div class="hero-main-container mt-16 flex flex-col justify-end relative w-full h-[70vh] md:h-[85vh] max-h-[700px] min-h-[300px] md:pl-10 xl:pl-20 overflow-hidden">
      
      <div class="h-full">
        <div v-if="data.gallery" ref="swiper" class="swiper swiper-container w-full h-full">
          <div class="swiper-wrapper w-full h-full">
            <div class="swiper-slide w-full h-full" v-for="image,index in data.gallery" :key="image.id">
              <EffectParallax :parallaxOffset="150">
                <nuxt-picture v-if="image.full_image_url"
                  width="1440"
                  height="750"
                  class="h-full w-full"
                  :src="image.full_image_url"
                  :alt="image.title"
                  :fit="'cover'"
                  format="webp"
                  :imgAttrs="{class: 'w-full h-full object-cover'}"
                  :loading="index>0? 'lazy':'eager' "
                />
              </EffectParallax>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute inset-0 custom-container z-10 pointer-events-none flex justify-between items-end">
        <div class="relative z-10 pointer-events-auto md:shrink-0 mb-10 md:w-min sm:w-fit md:min-w-[40%] md:pl-5 py-6 pr-10">
          <CommonLogoBig class="z-10 mb-7" />
          <UiButton v-if="data.button &&  data.button.link?.url" :link="data.button.link.url" class="z-10 mx-auto" >
            {{data.button.text}}
          </UiButton>
          <div
            class="absolute z-0 top-0 bottom-0 right-0 -left-[50vw] md:left-0 bg-gray-lightest/80 backdrop-blur-sm backdrop-blur-fix"
          ></div>
        </div>
        <div class="swiper-pagination !relative hidden md:flex justify-end items-end pointer-events-auto grow-0 mb-10 bottom-0"></div>
      </div>
    </div>

</template>

<script>
import { Swiper, Pagination, Autoplay, Lazy } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    props:{
        data:{
            type: Object,
            required: true
        }
    },

    data() {
    return {
      swiper: null,
      swiperOptionsObject: {
        modules: [ Autoplay, Pagination, Lazy],
        slidesPerView: 'auto',
        centeredSlides: true,
        grabCursor: 'true',
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        lazy: {
            loadPrevNext: true,
            loadOnTransitionStart: true
          },
        speed: 1000,
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