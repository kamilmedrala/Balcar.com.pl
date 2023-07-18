<template>
    <section class="w-full relative" :id="id">
        <div class="custom-container relative">
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
        }
    }

}
</script>

<style>

</style>