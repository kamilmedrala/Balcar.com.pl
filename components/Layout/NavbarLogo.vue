<template>
    <nuxt-link to="/" class="p-2 pl-0">
        <nuxt-picture
            :src="'/images/Balcar_logo.png'" 
            title="" 
            alt="Balcar logo" 
            class="block h-12 w-14 overflow-hidden transition-all duration-300"
            :class="{'w-52':expanded}"
            :imgAttrs="{class: 'h-12 object-cover object-left'}"
            />
    </nuxt-link>
</template>

<script>
export default {
    props:{
        expanded:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>

</style>