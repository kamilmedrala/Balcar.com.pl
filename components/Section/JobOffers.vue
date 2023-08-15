<template>
    <ul v-if="offersList.length > 0" class=" flex gap-5 flex-wrap mb-10 md:mb-20">
        <li v-for="job in offersList" :key="job.id" class="basis-full md:basis-[calc(50%_-_10px)]">
            <CommonJobTile :data="job"/>
        </li>
    </ul>
    <div v-else class="w-full py-20 px-5">
        <svg class="mb-10 stroke-gray-light h-20 w-20 mx-auto" width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.7909 9.22955H38V17.2465M25.7909 9.22955V5.57197H13.3582L13.3955 9.22955M25.7909 9.22955H13.3955M13.3955 9.22955H1V17.2465M1 17.2465V30.5796H38V17.2465M1 17.2465C14.9223 23.6146 22.9615 23.592 38 17.2465M2.23023 40L36.4156 1" />
        </svg>

        <p class="text-2xl md:text-3xl text-center mx-auto max-w-lg mb-5 md:mb-10">
            Obecnie nie posiadamy żadnych nowych ofert pracy
          </p>
          <nuxt-link
            :to="'/'"
            class="underline text-gold-light hover:text-gold-dark transition duration-200 text-base md:text-xl mx-auto max-w-lg block text-center"
            >Wróć do strony głównej</nuxt-link
          >    </div>
</template>
<script>
export default {
    computed:{
        offersList(){
            return this.$store.getters.getOffers
        }
    }
}
</script>