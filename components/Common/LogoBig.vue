<template>
  <div class="relative w-min sm:w-fit md:min-w-[40%] py-6 pr-10 mb-10 flex items-center">
    <nuxt-picture
      class="hidden md:block relative z-10 h-20 w-20 md:h-44 md:w-48 pr-2.5 md:pr-5"
      src="/images/Balcar_logo_part.png"
      :fit="'contain'"
      :imgAttrs="{ class: 'w-full h-full object-contain' }"
    />

    <div class="relative z-10 w-fit">
      <div class="flex flex-col md:items-center mt-5">
        <h1 class=" text-3xl md:text-7xl font-extrabold font-logo text-gray-dark">BALCAR</h1>
        <p class="text-gray-dark text-sm md:text-lg tracking-widest">
          usługi remontowo-budowlane i ocieplenia
        </p>
      </div>
    </div>
    <div v-if="hasBg"
      class="absolute z-0 top-0 bottom-0 right-0 left-[-50vw] bg-gray-lightest"
    ></div>
  </div>
</template>

<script>
export default {
    props:{
        hasBg: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style></style>
