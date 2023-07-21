<template>
    <div class="content text-gray-dark flex flex-col md:flex-row">
        <div v-if="data.title" class="shrink-0 md:basis-1/4 pr-5 md:pr-10 mb-5 md:mb-10">
            <EffectSlide class="!w-fit">
                <div class="pl-2 md:pl-4 pb-2 text-3xl md:text-5xl font-semibold w-fit" v-html="data.title">
                </div>
            </EffectSlide>
        </div>
      <p v-if="data.content" class="mb-5 md:mb-10" v-html="data.content">
      </p>

  </div>
</template>

<script>
export default {
    props:{
        data:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.content p {
    @apply text-base md:text-lg
}
.content a {
    @apply text-gold hover:underline
}
</style>