<template>
  <div class="fixed z-40 top-0 inset-x-0 bg-white/50 backdrop-filter backdrop-blur blur-fix shadow-md">
    <div class="custom-container flex justify-between items-center">
      <NavbarLogo class="relative z-50" :expanded="expandLogo || mobileExpanded" />
      <div class="relative z-40 w-5 h-5 bg-black md:hidden cursor-pointer"
      @click="toggleMobileExpand()">
      </div>
      <div class=" absolute md:static z-30 top-0 left-0 right-0 md:h-auto transition-all duration-500 bg-gray-dark md:bg-transparent overflow-hidden md:overflow-visible"
      :class="[mobileExpanded ? 'h-screen' : 'h-0']">
        <ul class="relative z-40 min-w-[20%] flex flex-col md:flex-row pt-28 md:pt-0">
          <li v-for="item in menuData" :key="item.ID">
            <NavbarItem :data="item" :isMainParent="true" :isMobileExpanded="mobileExpanded"/>
          </li>
        </ul>
      </div>
      <!-- <div v-if="mobileExpanded"
       class="absolute z-30 top-0 left-0 right-0 h-screen " >
       <div class="custom-container h-full flex">
         <div class="w-1/3 h-full border-0 border-l border-gray-light bg-white">
         </div>
         <div class="w-1/3 h-full border-0 border-l border-gray-light bg-white">
         </div>
         <div class="w-1/3 h-full border-0 border-l border-gray-light bg-white">
         </div>
       </div>
      </div>
       -->
    </div>
  </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue'
import NavbarLogo from './NavbarLogo.vue'
import {useWindowScroll} from '@vueuse/core'
import { computed } from 'vue'


export default {
  setup(){

    const { x, y } = useWindowScroll()

    const expandLogo = computed(()=>{
      return y.value && y.value > 500 ? true : false
    })

    return { y, expandLogo }
  },
  data(){
    return{
      mobileExpanded: false
    }
  },
  components: { NavbarItem, NavbarLogo },
  computed: {
    menuData() {
      return this.$store.getters['getMenus'].items
    }
  },
  methods:{
    toggleMobileExpand(){
      this.mobileExpanded = !this.mobileExpanded 
    }
  }
}
</script>

<style>

</style>