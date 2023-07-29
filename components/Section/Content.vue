<template>
    <div v-if="data" class="content text-gray-dark flex flex-col flex-wrap"
    :class="{'md:flex-row':titleInline}">
        <div v-if="data.title" class="pr-5 md:pr-10 mb-5 md:mb-10"
        :class="{'shrink-0 md:basis-1/4' :titleInline}">
            <EffectSlide class="!w-fit">
                <div class="title" v-html="data.title">
                </div>
            </EffectSlide>
        </div>
    
      <div v-if="data.content && data.content.startsWith('<p>')" class="mb-5 md:mb-10" :class="{'md:basis-3/4' :titleInline}" v-html="data.content">
      </div>
      <p v-else-if="data.content" class="mb-5 md:mb-10" :class="{'md:basis-3/4' :titleInline}" v-html="data.content">
      </p>

  </div>
</template>

<script>
export default {
    props:{
        data:{
            type: Object,
            required: true
        },
        titleInline: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.content :deep(p) {
    @apply text-base md:text-lg mb-5 md:mb-10
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
    @apply text-gold-light hover:underline
}

.content:deep(em){
    @apply text-gold-light not-italic
}
.content:deep(ol){
    @apply list-decimal
}
.content:deep(li){
    @apply mb-5
}
.content:deep(ol li){
    @apply ml-5
}
</style>