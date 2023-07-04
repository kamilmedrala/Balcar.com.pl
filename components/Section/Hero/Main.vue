<template>
    <div class="flex flex-col justify-end relative w-full h-[80vh] max-h-[600px] min-h-[300px] overflow-hidden">
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
        <div class="relative w-fit md:min-w-[40%] py-6 pr-10 mb-10 flex items-center">
          
          <!-- <nuxt-picture
            class="relative z-10 h-44 w-48 pr-5"
            src="/images/Balcar_logo_part.png"
            :fit="'contain'"
            :imgAttrs="{class: 'w-full h-full object-contain'}"
          /> -->

          <div class="relative z-10 w-fit">
            <div class="flex flex-col items-center mt-5">
              <h1 class="text-7xl font-extrabold font-logo text-gray-dark">BALCAR</h1>
              <p class="text-gray-dark text-lg tracking-widest">usługi remontowo-budowlane i ocieplenia</p>
            </div>
          </div>
          <div class="absolute z-0 top-0 bottom-0 right-0 left-[-50vw] bg-gray-lightest"></div>
        </div>
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