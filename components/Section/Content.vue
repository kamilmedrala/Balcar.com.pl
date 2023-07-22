<template>
    <div class="content text-gray-dark flex flex-col md:flex-row">
        <div v-if="data.title" class="shrink-0 md:basis-1/4 pr-5 md:pr-10 mb-5 md:mb-10">
            <EffectSlide class="!w-fit">
                <div class="title" v-html="data.title">
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

.content .title {
    @apply pl-2 md:pl-4 pb-2 font-semibold w-fit
}

.content .title :deep(h1){
    @apply text-5xl md:text-7xl
}
.content .title :deep(h2){
    @apply text-4xl md:text-6xl
}
.content .title :deep(h3){
    @apply text-2xl md:text-4xl
}
.content .title :deep(h4){
    @apply text-xl md:text-2xl
}

.content:deep(a) {
    @apply text-gold hover:underline
}

.content:deep(em){
    @apply text-gold not-italic
}
</style>