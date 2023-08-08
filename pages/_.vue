<template>
  <div v-if="pageData.acf && Object.keys(pageData.acf).length > 0">
    <template v-for="section,name in pageData.acf">
      <SectionBanner v-if="name=='banner'" :title="pageData.title.rendered" :bgImage="section && section.banner_image ? section.banner_image : {}" />
      <section-container v-else-if="componentRename[name]" :key="name">
        <component :is="componentRename[name]" :data="section"></component>
      </section-container>
    </template>
    <section-container v-if="pageData.acf.section_gallery">
        <SectionGallery :data="pageData.acf.section_gallery"/>
    </section-container>
    <section-container v-if="pageData.title.rendered == 'Kontakt'">
        <SectionContactForm/>
    </section-container>
    <CommonScrollProgress :scrollDownVal="400" />
  </div>
  <div v-else-if="pageData.content && pageData.content.rendered" class="pt-20">
    <section-container class="mb-20">
      <h1 class="text-gray-dark text-4xl md:text-5xl mb-10">{{pageData.title.rendered}}</h1>
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
        'section_content':'SectionContent',
      }

    }
  },
  head(){
    let meta = []

    if (this.pageData?.acf?.banner?.banner_image?.url) {
      meta.push({ hid: 'og-image', property: 'og:image',
        content: this.pageData.acf.banner.banner_image.url
      })
    }

    if (this.pageData?.title?.rendered) {
      meta.push({ hid: 'og-title', property: 'og:title',
        content: 'Balcar | ' + this.pageData.title.rendered
      })
    }

    return{
      title: 'Balcar | ' + this.pageData.title.rendered,
      meta: meta
    }
  }
}
</script>

<style>

</style>