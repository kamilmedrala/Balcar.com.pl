<template>
  <nuxt-link v-if="linkHash" :to="{path:'/', hash: linkHash.hash}">
    <slot></slot>
  </nuxt-link>
  <nuxt-link v-else-if="!checkExternal" :to="linkFormatted">
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
            if (!this.link) {
                return ''
            }
            const parsedLink = this.link.replace(this.$config.apiUrl,'')
            return parsedLink
        },

        linkHash(){
            if (this.linkFormatted.includes('#')) {
                let path = this.linkFormatted.split('/#')
                return {path: path.slice(0,-1).join(''), hash:`${path[path.length - 1]}`}
            }else{
                return false
            }
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