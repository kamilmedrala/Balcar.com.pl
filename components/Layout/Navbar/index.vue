<template>
  <div class="fixed z-50 top-0 inset-x-0">
    
    <div
    class="absolute bottom-full h-screen w-full backdrop-filter backdrop-blur backdrop-blur-fix transition-all duration-500"
    :class="[
      mobileExpanded ? 'translate-y-full !bg-gray-dark' : 'translate-y-16 ',
      y > 0 ? 'bg-white/50 shadow-md shadow-gray-dark/5' : 'bg-gray-lightest'
      ]"
    >
    </div>

    <div class="custom-container flex justify-between items-center">
      <LayoutNavbarLogo class="relative z-50" :expanded="expandLogo || mobileExpanded || !isHomepage" :colorInverted="mobileExpanded" @click.native="mobileExpanded ? toggleMobileExpand() : null" />
      <LayoutNavbarHamburger :isExpanded="mobileExpanded"
      @click.native="toggleMobileExpand()"/>
      <div class="absolute md:static z-30 top-0 left-0 right-0 md:h-auto transition-all duration-300 bg-gray-dark/0 md:bg-transparent overflow-hidden md:overflow-visible"
      :class="[mobileExpanded ? 'h-screen' : 'h-0']">
        <ul v-if="menu" class="container mx-auto md:mx-0 relative z-40 min-w-[20%] flex flex-col md:flex-row pt-28 md:pt-0">
          <li v-for="item in menu" :key="item.ID">
            <LayoutNavbarItem :data="item" :isMainParent="true" :isMobileExpanded="mobileExpanded" @click.native="toggleMobileExpand()" />
          </li>
        </ul>
      </div>
      <div
       class="absolute z-20 top-0 left-0 right-0 md:hidden transition-all duration-500 " 
       :class="[mobileExpanded ? 'h-screen' : 'h-0']">
       <div class="custom-container h-full flex">
         <div class="h-full border-0 border-l border-gray-light/5">
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  props:{
    menu: Array
  },
  methods:{
    toggleMobileExpand(){
      if (window.innerWidth<768) {
        this.mobileExpanded = !this.mobileExpanded 
      }
    }
  },
  computed:{
    isHomepage(){
      return this.$route.path === '/' 
    }
  }
}
</script>

<style>

</style>