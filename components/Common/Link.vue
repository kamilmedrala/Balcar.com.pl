<template>
  <nuxt-link v-if="!checkExternal" :to="linkFormatted">
    <slot></slot>
  </nuxt-link>
  <a v-else :href="linkFormatted">
    <slot></slot>
  </a>
</template>

<script>
export default {
    props:{
        link: {
            type: String,
            required: true
        },
        isExternal:{
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed:{
        linkFormatted(){
            const parsedLink = this.link.replace(this.$config.apiUrl,'')
            return parsedLink
        },

        checkExternal(){
            if (this.isExternal) {
                return true
            }
            
            var r = new RegExp('^(?:[a-z+]+:)?//|\\/wp-content\\/', 'i')
            if (r.test(this.linkFormatted)) {
                return true
            }
        }
    },
}
</script>

<style>

</style>