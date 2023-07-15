<template>
  <div v-if="data.content" class="content text-gray-dark mb-5 md:mb-10" v-html="data.content">

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
.content >>> p {
    @apply text-base md:text-lg
}
.content >>> a {
    @apply text-gold hover:underline
}
</style>