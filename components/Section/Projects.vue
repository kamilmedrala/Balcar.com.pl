<template>

    <div class="!overflow-hidden mb-20">
        <div class="custom-container">
            <SectionContent v-if="data.content" :data="data" />
            <div v-if="data.gallery" class="w-full ">
                <div class="mx-auto !w-10/12 md:!w-3/5 !aspect-video max-h-[600px] mb-10 overflow-visible">
                    <div ref="swiper" class="swiper swiper-container h-full !overflow-visible">
                        <div class="swiper-wrapper items-center w-full h-full">
                            <div class="swiper-slide relative mx-2 md:mx-5 w-full shrink-0 overflow-hidden"
                                v-for="image in data.gallery" :key="image.id">
                                <EffectParallax class="w-full h-full relative z-20" :parallaxOffset="70"
                                    data-swiper-parallax="150">
                                    <nuxt-picture v-if="image.full_image_url" class="h-full w-full relative z-20"
                                        width="960" height="610" format="webp" :src="image.full_image_url"
                                        :alt="image.title" :fit="'cover'" loading="lazy"
                                        :imgAttrs="{ class: 'w-full h-full object-cover' }" />
                                </EffectParallax>
                                <div class="absolute inset-0 z-10 bg-gray-light animate-pulse"
                                    data-swiper-parallax="150"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { Swiper, Parallax, Autoplay, Lazy } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            swiper: null,
            swiperOptionsObject: {
                slidesPerView: 'auto',
                modules: [Autoplay, Parallax, Lazy],
                centeredSlides: true,
                grabCursor: 'true',
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                speed: 1000,
                lazy: {
                    loadPrevNext: true,
                },
                loop: true,
                parallax: true,
            },
        }
    },
    mounted() {
        this.swiper = new Swiper(this.$refs.swiper, this.swiperOptionsObject)
    },
}
</script>
<style scoped>
.swiper:deep(.swiper-slide) {
  @apply !h-4/5 transition-all duration-700;
}
.swiper:deep(.swiper-slide.swiper-slide-active) {
  @apply !h-full;
}
</style>