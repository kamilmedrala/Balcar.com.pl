<template>
    
    <div class="!overflow-hidden">
        <SectionContent
            class="custom-container"
            :data="data"
            :titleInline="true"
        />
        <div class="reviews-container custom-container" >
          <div v-if="reviewsList" ref="swiper" class="swiper swiper-container w-full h-full !overflow-visible mb-10">
            <ul class="swiper-wrapper w-full h-full relative">
              <li class="swiper-slide h-full flex flex-col basis-11/12 md:basis-1/2 shrink-0 pr-7 xl:pr-14" v-for="review,index in reviewsList" :key="index">
                <div class="text-gray-dark text-xl sm:text-2xl mb-2.5 [&_*]:inline"> 
                    "<div v-html="review.content"></div>"
                </div>
                <div class="flex items-center">
                    <div class="text-gray-dark text-lg mr-2"> <span class="text-xl text-gold-light">{{review.rating}}</span> / 5</div>
                    <div class="relative">
                        <span class=" ml-2">{{ review.name }}</span>
                        <div class="absolute left-0 top-0 h-full w-px bg-gray-dark transition duration-500"></div>
                    </div>
                </div>
            </li>
            </ul>
          </div>
          <div class="swiper-pagination-reviews h-2 !static !flex justify-center items-end pointer-events-auto grow-0"></div>
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
        grabCursor: 'true',
        autoplay: {
          delay: 6000,
          disableOnInteraction: true,
        },
        watchSlidesProgress: true,
        loop: true,
        speed: 1000,
        pagination: {
          el: ".swiper-pagination-reviews",
          clickable: true,
        },
      },
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject)
  },
  computed:{
    reviewsList(){
        if (!this.$props.data) return 

        return Object.keys(this.$props.data)
        .filter(key => (key.startsWith('review') && this.$props.data[key].content !== ''))
        .map(key => this.$props.data[key]);
    }
  }
}
</script>

<style scoped>

.reviews-container >>> .swiper-slide {
    @apply opacity-20 transition duration-300;
}

.reviews-container >>> .swiper-slide.swiper-slide-visible {
    @apply !opacity-100;
}

.reviews-container >>> span.swiper-pagination-bullet{
  @apply h-[3px] basis-10 2xl:basis-14 rounded-none !bg-gold-light/50 opacity-100 transition-all duration-300
}

.reviews-container >>> .swiper-pagination-bullet.swiper-pagination-bullet-active{
  @apply h-1.5 !bg-gold-light
}

</style>