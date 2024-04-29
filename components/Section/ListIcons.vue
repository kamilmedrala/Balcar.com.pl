<template>
    
    <div class="!overflow-hidden">
        <div class="custom-container">
            <div v-if="data.title" class="text-3xl md:text-4xl mb-10 font-semibold text-gray-dark" v-html="data.title"></div>
            <div v-if="listItems" ref="swiper" class="swiper swiper-container w-full h-full !overflow-visible mb-20 mt-5">
                <ul class="swiper-wrapper w-full h-full relative lg:flex lg:flex-wrap">
                    <li class="swiper-slide h-full flex flex-col lg:flex-row gap-5 basis-4/5 md:basis-2/3 lg:basis-1/2 lg:pb-10 shrink-0 pr-12 xl:pr-20" v-for="item,index in listItems" :key="index">
                    <nuxt-picture v-if="item.icon && item.icon.url"
                            height="80"
                            width="80"
                            format="webp"
                            :quality="80"
                            loading="lazy"
                            fit="outside"
                            class="shrink-0 h-20 w-20"
                            :imgAttrs="{ class: 'object-contain w-full h-full' }"
                            :src="item.icon.url"
                            :alt="item.icon.alt ?? ''" />
                        <div class="text-gray-dark text-lg [&_h4]:text-xl md:[&_h4]:text-2xl [&_h4]:mb-2 [&_h4]:block"> 
                            <div v-html="item.description"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
import { Swiper, Autoplay } from 'swiper'
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
        modules: [ Autoplay],
        slidesPerView: 'auto',
        grabCursor: 'true',
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        watchSlidesProgress: true,
        speed: 1000,
        enabled: true,
        breakpoints:{
            1024:{
                enabled: false,
                grabCursor: 'false',
            }
        }
      },
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject)
  },
  computed:{
    listItems(){
        if (!this.$props.data) return 

        return Object.keys(this.$props.data)
        .filter(key => (key.startsWith('item') && this.$props.data[key].content !== ''))
        .map(key => this.$props.data[key]);
    }
  }
}
</script>

<style scoped>

.swiper >>> .swiper-slide {
    @apply opacity-0 transition duration-300;
}

.swiper >>> .swiper-slide.swiper-slide-visible  {
    @apply !opacity-100;
}

.swiper >>> .swiper-slide.swiper-slide-visible ~ .swiper-slide  {
    @apply !opacity-100;
}

</style>