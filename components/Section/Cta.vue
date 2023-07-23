<template>
    <div class=" relative bg-gray-light px-5 py-8 md:p-10 md:pt-20">
        <div class="absolute z-0 inset-0 overflow-hidden">
            <EffectParallax :parallaxOffset="50">
                <CommonBackgroundHouseB />
            </EffectParallax>
        </div>
        <div class="relative z-10 flex flex-col md:flex-row gap-10 justify-between items-center md:items-end">
            <div v-if="data.title" 
            class="text-gray-dark text-3xl md:text-4xl max-w-md" 
            v-html="data.title"></div>
            <UiButton v-if="data.button_text" :link="'/kontakt/'">
            {{ data.button_text }}
            </UiButton>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
:deep(em){
    @apply not-italic text-gold-light
}
</style>