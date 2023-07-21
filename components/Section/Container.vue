<template>
    <section class="w-full relative">
        <div v-if="id" :id="id" class="-top-20 relative"></div>
        <div class="custom-container relative">
            <div v-if="sectionNumber" class="relative mb-5 md:mb-10">
                <span class="text-gray-light text-lg">/{{ sectionNumber }}</span>
                <hr class="absolute w-screen right-0 border-gray-light" >
            </div>
            <slot></slot>  
        </div>
        <slot name="full"></slot>
    </section>
</template>

<script>
export default {
    props:{
        id: {
            type:String,
            required: false
        },
        sectionNumber:{
            type:Number,
            required: false
        },
    }

}
</script>

<style>

</style>