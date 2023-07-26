<template>
    <div class="relative flex items-end w-full min-h-[300px] md:min-h-[400px] py-12 mb-10 md:mb-20">
        <div class="custom-container relative z-20">
            <h1 v-if="title"
                class="text-5xl md:text-6xl md:pl-5 text-white">
                {{ title }}
            </h1>
        </div>
        <div class="absolute inset-0 z-0 bg-gray-light md:left-10 xl:left-20 overflow-hidden">
            <EffectParallax :parallaxOffset="100">
                <nuxt-picture v-if="bgImage"
                :alt="bgImage.alt ? bgImage.alt : 'Balcar F.H.U image' "
                :src="bgImage.url" 
                fit='cover'
                class="w-full h-full object-cover "
                :imgAttrs="{class: 'object-cover w-full h-full'}"
                />
            </EffectParallax>
            <div class="absolute inset-0 z-10 bg-gray-dark/50">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title: String,
        bgImage: {}
    }
}
</script>