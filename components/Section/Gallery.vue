<template>
    <div class="mb-20 md:mb-[100px]">
        <div class="flex flex-wrap gap-1 md:gap-5">
            <div class="flex-auto relative h-[150px] md:h-[225px] lg:h-[300px] overflow-hidden" v-for="image,index in data" :key="image.id"
            :style="{'animation-delay': index * 100 + 'ms'}">
            <nuxt-img
                height="20"
                :format="'webp'"
                :quality="1"
                class="h-full w-full object-cover blur-lg"
                :src="image.full_image_url"
                :alt="image.title" />
            <nuxt-picture
                height="300"
                width="400"
                :format="'webp'"
                :quality="80"
                loading="lazy"
                class="absolute inset-0 object-cover"
                :imgAttrs="{ class: 'object-cover w-full h-full' }"
                :src="image.full_image_url"
                :alt="image.title" />            
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SectionGallery',
    props:{
        data:{
            type: Array,
            required:true
        }
    },
}
</script>