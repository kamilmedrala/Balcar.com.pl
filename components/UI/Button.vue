<template>
  <CommonLink v-if="link" :link="link" class="relative flex justify-between items-center gap-5 w-fit text-white hover:text text-base md:text-lg px-5 py-2 md:px-6 md:py-3 bg-gold-light hover:bg-gold-dark transition duration-200 after:content-[''] after:w-5 after:h-0.5 after:bg-white hover:after:translate-x-2 after:transition after:duration-200 shadow-lg shadow-gold-light/20">
    <slot></slot>
  </CommonLink>
</template>

<script>
export default {
  props:{
    link:{
      type: String,
      required: false
    }
  }

}
</script>

<style>

</style>