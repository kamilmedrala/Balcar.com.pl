<template>
    <CommonLink v-if="data" :link="`/praca/${data.slug}`" class="group block relative p-5 border-gray-light hover:border-gold-light border border-solid transition duration-200 ">
        <div class="flex flex-col justify-end relative z-20 h-[100px] md:h-[200px]">
            <h3 v-if="data.title" class="text-lg md:text-2xl mb-5 font-semibold text-gray-dark">{{ data.title.rendered }}</h3>
        </div>
        <div v-if="data.acf?.banner?.banner_image?.url" class="absolute z-0 inset-0 bottom-5">
            <nuxt-picture 
            width="450"
            height="300"
            :src="data.acf.banner.banner_image.url"
            :alt="data.acf.banner.banner_image.alt" 
            class="w-full h-full overflow-hidden mb-5 opacity-50 transition duration-200 group-hover:opacity-70"
            :imgAttrs="{class: 'w-full h-full object-cover'}"
            />
        </div>
        <div class="absolute top-0 bottom-5 inset-x-0 z-10 pointer-events-none bg-gradient-to-t from-gray-lightest from-0% to-100% "></div>
    </CommonLink>
</template>
<script>
export default {
    props:{
        data: {
            type: Object
        }
    }
}
</script>