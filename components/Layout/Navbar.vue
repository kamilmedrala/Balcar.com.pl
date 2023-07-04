<template>
  <div class="fixed z-40 top-0 inset-x-0 bg-white/50 backdrop-filter backdrop-blur blur-fix shadow-md shadow">
    <div class="custom-container flex justify-between items-center">
      <NavbarLogo :expanded="expandLogo" />
      <ul class="flex min-w-[20%]">
        <li v-for="item in menuData" :key="item.ID">
          <NavbarItem :data="item" :isMainParent="true"/>
        </li>
      </ul>
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
  components: { NavbarItem, NavbarLogo },
  computed: {
    menuData() {
      return this.$store.getters['getMenus'].items
    }
  },
}
</script>

<style>

</style>