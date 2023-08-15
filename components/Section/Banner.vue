<template>
  <div>
    <div
      class="relative flex items-end w-full min-h-[300px] md:min-h-[400px] py-12 mb-10 md:mb-20"
    >
      <div class="custom-container relative z-20">
        <h1 v-if="title" class="text-5xl md:text-6xl md:pl-5 text-white">
          {{ title }}
        </h1>
      </div>
      <div
        class="absolute inset-0 z-0 bg-gray-light md:left-10 xl:left-20 overflow-hidden"
      >
        <EffectParallax :parallaxOffset="100">
          <nuxt-picture
            v-if="bgImage && bgImage.url"
            :alt="bgImage.alt ? bgImage.alt : 'Balcar F.H.U image'"
            :src="bgImage.url"
            format="webp"
            fit="cover"
            class="w-full h-full object-cover"
            loading="eager"
            :imgAttrs="{ class: 'object-cover w-full h-full' }"
          />
        </EffectParallax>
        <div class="absolute inset-0 z-10 bg-gray-dark/50"></div>
      </div>
    </div>
    <div v-if="isJobOffer" class="custom-container ">
        <nuxt-link
          :to="'/praca'"
          class="text-gold-light items-center group hovertext-gold-dark transition duration-200 flex w-fit mb-10"
        >
          <svg
            width="18"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="rotate-180 mr-5 fill-gold-light transition duration-200 group-hover:-translate-x-2"
          >
            <path
              d="M15.6 0.111816L14.2742 1.43762L19.899 7.06244H0.513672V8.9375H19.8988L14.2742 14.5621L15.6 15.8879L23.4882 7.99988L15.6 0.111816Z"
            ></path>
          </svg>
          Wróć do ofert
        </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    bgImage: {},
  },
  computed: {
    isJobOffer() {
      return (
        this.$route.fullPath.startsWith('/praca/') &&
        this.$route.fullPath.length > 7
      )
    },
  },
}
</script>
