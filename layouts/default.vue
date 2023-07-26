<template>
  <div class="min-h-screen relative flex flex-col">
    <LayoutNavbar :menu="topMenuData" />
    <Nuxt class="relative z-10" />
    <LayoutSocials :general="generalData" />
    <SectionContainer v-if="generalData.section_contact && showCta" class="mt-auto">
      <SectionCta :data="generalData.section_contact"/>
    </SectionContainer>
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
    showCta(){
      return this.$route.path !== '/kontakt/'
    }
  }
}
</script>

<style>

</style>