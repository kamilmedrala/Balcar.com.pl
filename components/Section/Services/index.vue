<template>
    <div class="flex flex-col">
        <SectionServicesItem v-for="item in menuServicesChildren" :key="item.ID" :data="item" />
    </div>
</template>
<script>
export default {
  computed: {
    menuServicesChildren() {
      const menuItems = this.$store.getters['getMenus'].items
      const servicesMenu = menuItems.find(item => item.ID === 121)
        
      if (!servicesMenu || !servicesMenu.child_items) {
        return null
      }

      return servicesMenu.child_items
    }
  },
  methods:{

  }
}
</script>