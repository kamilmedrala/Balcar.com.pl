<template>
  <div class="fixed z-40 top-0 inset-x-0 bg-white/50 backdrop-filter backdrop-blur blur-fix">
    <div class="custom-container flex justify-between ">
      Navbar
  
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

export default {
  components: { NavbarItem },
  computed: {
    menuData() {
      return this.$store.getters['getMenus'].items
    }
  },
}
</script>

<style>

</style>