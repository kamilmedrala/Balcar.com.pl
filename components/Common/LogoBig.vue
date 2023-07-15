<template>
  <div class="relative flex items-center">
    <nuxt-picture
      class="hidden md:block relative h-20 w-20 md:h-44 md:w-48 pr-2.5 md:pr-5"
      src="/images/Balcar_logo_part.png"
      :fit="'contain'"
      :imgAttrs="{ class: 'w-full h-full object-contain' }"
    />

    <div class="relative w-fit">
      <div class="flex flex-col md:items-center mt-5">
        <h1 class=" text-3xl md:text-7xl font-extrabold font-logo text-gray-dark">BALCAR</h1>
        <p class="text-gray-dark text-sm md:text-lg tracking-widest">
          usługi remontowo-budowlane i ocieplenia
        </p>
      </div>
    </div>
  </div>
</template>