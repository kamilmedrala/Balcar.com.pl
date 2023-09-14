<template>
  <div class="min-h-screen relative flex flex-col">
    <LayoutNavbar :menu="topMenuData" />
    <Nuxt class="relative z-10" />
    <SectionContainer v-if="generalData.section_brands || generalData.section_brands_gallery" class="mt-auto">
      <template #full>
        <SectionBrands v-if="generalData.section_brands" :data="{...generalData.section_brands,gallery: generalData.section_brands_gallery}" />
      </template>
    </SectionContainer>
    <LayoutSocials :general="generalData" />
    <CommonPopupCookies />
    <LayoutFooter :menu="footerMenuData" class="mt-10 md:mt-20" />
  </div>
</template>

<script>
export default {
  computed:{
    generalData(){
      return this.$store.getters.getGeneral
    },
    topMenuData(){
      return this.$store.getters.getMenus.top.items
    },
    footerMenuData(){
      return this.$store.getters.getMenus.footer.items
    },
  }
}
</script>
