<template>
  <div>
    <SectionContent :data="data" :titleInline="true" />
    <div class="flex flex-col mb-10">
      <SectionServicesItem v-for="item in menuServicesChildren" :key="item.ID" :data="item" />
    </div>
    <div v-if="data.button && data.button.link && data.button.text" class="w-full">
      <UiPrimaryButton :link="data.button.link.url" class="mx-auto">
        {{ data.button.text }}
      </UiPrimaryButton>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    data: {
      type:Object,
      required: true
    }
  },
  computed: {
    menuServicesChildren() {
      const menuItems = this.$store.getters['getMenus'].top.items
      const servicesMenu = menuItems.find(item => item.ID === 121)
        
      if (!servicesMenu || !servicesMenu.child_items) {
        return null
      }

      return servicesMenu.child_items
    }
  },
  
}
</script>