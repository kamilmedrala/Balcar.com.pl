<template>
  <div>
    <SectionContainer class="mb-10 md:mb-16">
      <template #full>
        <SectionHeroMain :data="pageData.acf.section_banner" />
      </template>
    </SectionContainer>
    <SectionContainer class="mb-10 md:mb-20">
      <SectionContent :data="pageData.acf.section_about" />
    </SectionContainer>
    <SectionContainer class="mb-20">
      <SectionCounters :data="pageData.acf.section_counters" />
    </SectionContainer>
    <SectionContainer>
      <h1 class="text-gray-dark">KOLEJNY</h1>
      <div class="h-[200vh]"></div>
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from '~/components/Section/Container.vue'
import SectionHeroMain from '~/components/Section/Hero/Main.vue'
import SectionContent from '~/components/Section/Content.vue'
import SectionCounters from '~/components/Section/Counters.vue'

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