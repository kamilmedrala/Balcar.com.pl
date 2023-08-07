<template>
    <nuxt-link to="/" class="p-2 pl-0 flex"
    @click.native="scrollTop()">
        <nuxt-picture
        width="49"
        height="48"
            :src="'/images/Balcar_logo_part.png'" 
            title="Strona główna" 
            alt="Balcar logo" 
            class="block h-12 overflow-hidden transition-all duration-300"
            :imgAttrs="{class: 'h-12 object-cover object-left'}"
            />
        <nuxt-picture
        width="150"
        height="48"
            :src="'/images/Balcar_logo_text.png'" 
            title="Strona główna" 
            alt="Balcar logo text" 
            class="block h-12 overflow-hidden transition-all duration-300 pl-1 invert-fix"
            :class="[[expanded ? 'translate-y-0' : 'translate-y-[-105%] opacity-0'],{'invert':colorInverted}]"
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
        },
        colorInverted:{
            type: Boolean,
            default: false
        },
    },
    methods:{
        scrollTop(){
            window.scrollTo({
                top: 0,
                behavior: "smooth",
                });
        }
    }
}
</script>

<style>

</style>