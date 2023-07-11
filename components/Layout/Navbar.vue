<template>
  <div class="fixed z-40 top-0 inset-x-0">
    
    <div
    class="absolute bottom-full h-screen w-full backdrop-filter backdrop-blur blur-fix shadow-md shadow-gray-dark/5 transition-all duration-500"
    :class="[mobileExpanded ? 'translate-y-full bg-gray-dark' : 'translate-y-16 bg-white/50']"
    >
    </div>

    <div class="custom-container flex justify-between items-center">
      <NavbarLogo class="relative z-50" :expanded="expandLogo || mobileExpanded" :colorInverted="mobileExpanded" />
      <NavbarHamburger :isExpanded="mobileExpanded"
      @click.native="toggleMobileExpand()"/>
      <div class="absolute md:static z-30 top-0 left-0 right-0 md:min-w-[20%] md:h-auto transition-all duration-300 bg-gray-dark/0 md:bg-transparent overflow-hidden md:overflow-visible"
      :class="[mobileExpanded ? 'h-screen' : 'h-0']">
        <ul class="container mx-auto md:mx-0 relative z-40 min-w-[20%] flex flex-col md:flex-row pt-28 md:pt-0">
          <li v-for="item in menuData" :key="item.ID">
            <NavbarItem :data="item" :isMainParent="true" :isMobileExpanded="mobileExpanded"/>
          </li>
        </ul>
      </div>
      <div
       class="absolute z-20 top-0 left-0 right-0 md:hidden transition-all duration-500 " 
       :class="[mobileExpanded ? 'h-screen' : 'h-0']">
       <div class="custom-container h-full flex">
         <div class="w-1/3 h-full border-0 border-l border-gray-light/5">
         </div>
         <div class="w-1/3 h-full border-0 border-l border-gray-light/5">
         </div>
         <div class="w-1/3 h-full border-0 border-x border-gray-light/5">
         </div>
       </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import NavbarItem from './NavbarItem.vue'
import NavbarLogo from './NavbarLogo.vue'
import NavbarHamburger from './NavbarHamburger.vue'
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
  components: { NavbarItem, NavbarLogo, NavbarHamburger },
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