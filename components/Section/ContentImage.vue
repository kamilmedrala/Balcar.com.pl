<template>
    <div v-if="data" class=" text-gray-dark flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10 mb-20">
        <nuxt-picture v-if="data.image"
            height="500"
            width="700"
            format="webp"
            :quality="80"
            loading="lazy"
            class="w-full md:w-1/3 shrink-0"
            :imgAttrs="{ class: 'object-contain w-full h-full' }"
            :src="data.image.url"
            :alt="data.image.alt" />
        <SectionContent v-if="data.content" :data="data"/>
  </div>
</template>

<script>
export default {
    props:{
        data:{
            type: Object,
            required: true
        },
    }
}
</script>