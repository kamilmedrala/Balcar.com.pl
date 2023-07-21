<template>
  <div>
    <SectionContainer class="mb-10 md:mb-16">
      <template #full>
        <SectionHeroMain :data="pageData.acf.section_banner" />
      </template>
    </SectionContainer>
    <SectionContainer :section-number="1" class="mb-16 md:mb-32">
      <EffectParallax :parallaxOffset="100" class="!absolute !h-auto overflow-hidden -z-10 top-8 -bottom-24 md:-bottom-40 left-0 md:left-1/5 right-0">
        <nuxt-picture class=" invert opacity-[20%]" 
              :src="'/images/dotted_map_bg.png'" 
              :imgAttrs="{class: 'h-full w-full object-cover object-right'}"/>
      </EffectParallax>

      <SectionContent :data="pageData.acf.section_about" class="mb-16 md:mb-36" />
      <SectionCounters :data="pageData.acf.section_counters" />
    </SectionContainer>
    <SectionContainer :id="'uslugi'" :section-number="2" class="mb-20">
      <SectionServices :data="pageData.acf.section_services" />
    </SectionContainer>
    <SectionContainer :section-number="3">
      <template #full>
        <SectionRealisations :data="pageData.acf.section_realisations" />
      </template>
    </SectionContainer>
    <div class="h-[200vh]"></div>
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
}
</script>

<style>

</style>