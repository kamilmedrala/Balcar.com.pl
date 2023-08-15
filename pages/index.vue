<template>
  <div>
    <SectionContainer class="mb-10 md:mb-16">
      <template #full>
        <SectionHeroMain :data="pageData.acf.section_banner" />
      </template>
    </SectionContainer>
    <SectionContainer :title="'1 - O nas'" class="mb-16 md:mb-32">
      <EffectParallax :parallaxOffset="100" class="!absolute !h-auto overflow-hidden -z-10 top-8 -bottom-24 md:-bottom-[9.75rem] left-0 md:left-1/5 right-0">
        <CommonBackgroundHouse />
      </EffectParallax>
      <SectionContent :data="pageData.acf.section_about" :titleInline="true" class="mb-16 md:mb-36" />
      <SectionCounters :data="pageData.acf.section_counters" />
    </SectionContainer>
    <SectionContainer :id="'uslugi'" :title="'2 - Usługi'" class="mb-20">
      <SectionServices :data="pageData.acf.section_services" />
    </SectionContainer>
    <SectionContainer :title="'3 - Realizacje'" class="mb-16 md:mb-36">
      <template #full>
        <SectionRealisations :data="pageData.acf.section_realisations" />
      </template>
    </SectionContainer>
    <SectionContainer class="mb-16 md:mb-36">
        <SectionContent v-if="pageData.acf.section_text_1 && pageData.acf.section_text_1.content" :data="pageData.acf.section_text_1" />
        <SectionContent v-if="pageData.acf.section_text_2 && pageData.acf.section_text_2.content" class="mt-10" :data="pageData.acf.section_text_2" />
    </SectionContainer>
    <CommonScrollProgress />
  </div>
</template>

<script>
import SectionContainer from '~/components/Section/Container.vue'
import SectionHeroMain from '~/components/Section/Hero/Main.vue'
import SectionContent from '~/components/Section/Content.vue'
import SectionCounters from '~/components/Section/Counters.vue'
import SectionServices from '~/components/Section/Services/index.vue'
import SectionRealisations from '~/components/Section/Realisations.vue'

export default {
  async asyncData({ $axios, $formatPageData }) {
      const pageData = await $axios.$get('/wp/v2/pages/6')
      $formatPageData(pageData)
      return { pageData }
    },
  components: { SectionContainer, SectionHeroMain, SectionContent },
  computed:{
    generalData(){
      return this.$store.getters.getGeneral
    }
  },
  head(){
    let meta = []

    if (this.pageData?.acf?.section_banner?.gallery[0]?.full_image_url) {
      meta.push({ hid: 'og-image', property: 'og:image',
        content: this.pageData.acf.section_banner.gallery[0].full_image_url
      })
    }

    if (this.pageData?.title?.rendered) {
      meta.push({ hid: 'og-title', property: 'og:title',
        content: 'Balcar | ' + this.pageData.title.rendered
      })
    }

    return{
      title: 'Balcar | Strona Główna',
      meta: meta
    }
  }
}
</script>

<style>

</style>