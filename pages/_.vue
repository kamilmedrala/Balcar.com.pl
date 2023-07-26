<template>
  <div v-if="pageData.acf && pageData.acf.length > 0">
    <template v-for="section,name in pageData.acf">
      <SectionBanner v-if="name=='banner'" :title="pageData.title.rendered" :bgImage="section.banner_image" />
      <section-container v-else :key="name">
        <component v-if="componentRename[name]" :is="componentRename[name]" :data="section"></component>
      </section-container>
    </template>
    <CommonScrollProgress :scrollDownVal="400" />
  </div>
  <div v-else-if="pageData.content && pageData.content.rendered" class="pt-20">
    <section-container class="mb-20">
      <SectionContent :data="{content: pageData.content.rendered}" />
    </section-container>
  </div>
</template>

<script>
import SectionContainer from '~/components/Section/Container.vue'
export default {
  async asyncData({ $axios, $formatPageData, route }) {
      const pageData = await $axios.$get(`/wp/v2/pages?slug=${route.path}&acf_format=standard`)
      $formatPageData(pageData[0])
      return { pageData: pageData[0] }
    },
  components: { SectionContainer },
  data(){
    return{
      componentRename: {
        'section_content':'SectionContent'
      }

    }
  }
}
</script>

<style>

</style>