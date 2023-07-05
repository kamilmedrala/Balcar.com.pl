<template>
    <div class="flex flex-col justify-end relative w-full h-[60vh] md:h-[80vh] max-h-[600px] min-h-[300px] overflow-hidden">
      <div class="absolute inset-0">
        <div class="w-full h-full" v-for="image in data" :key="image.id">
          <nuxt-picture v-if="image.full_image_url"
            class="h-full w-full "
            :src="image.full_image_url"
            :fit="'cover'"
            :imgAttrs="{class: 'w-full h-full object-cover'}"
          />
        </div>
      </div>
      <div class="custom-container realtive z-10 ">
        <CommonLogoBig :hasBg="true" />
      </div>
    </div>

</template>

<script>
export default {
    props:{
        data:{
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>