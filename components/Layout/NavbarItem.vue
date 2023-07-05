<template>
  <div
    class="relative"
    @mouseenter="setHover(true)"
    @mouseleave="setHover(false)"
  >
  <div class=" my-3 md:m-0 overflow-hidden md:overflow-visible"
  :class="{'mx-5':isMainParent}">
      <div
        class="block transition duration-500 md:duration-200 delay-300 md:delay-0"
        :class="[
          { peer: data.child_items },
          [
            isMainParent
              ? 'md:p-5 border-0 border-l border-transparent '
              : 'md:py-2 px-3 ml-2',
          ],
          { 'md:bg-white md:!border-l-gray-dark': isMainParent && isHover },
          { 'translate-y-full md:translate-y-0': !isMobileExpanded },
        ]"
      >
        <CommonLink
          :link="data.url"
          class="block text-gray-lightest md:text-gray-dark text-2xl md:text-base font-light md:font-normal hover:text-gold transition duration-200 overflow-hidden md:overflow-auto"
        >
          {{ data.title }}
        </CommonLink>
      </div>
  </div>
    <div
      v-if="data.child_items"
      class="md:absolute ml-5 md:ml-0 top-full left-0 min-w-[220px] shadow-none overflow-hidden transition-all duration-[400ms]"
      :class="{ 'md:shadow-md': isHover }"
      :style="{ height: isMobile ? 'auto' : subitemsHeight }"
    >
      <div ref="subitemsContainer" class="md:pt-1">
        <ul
          class="md:bg-white border-0 border-l border-gray-lightest/20 md:border-gray-dark"
        >
          <li v-for="(item, index) in data.child_items" :key="item.id">
            <LayoutNavbarItem
              :data="item"
              :isMobileExpanded="isMobileExpanded"
              class="md:opacity-0 md:-translate-x-10 transition-all md:duration-300"
              :class="{ 'md:!opacity-100 md:!translate-x-0': isHover }"
              :style="{ 'transition-delay': `${isHover ? index * 100 : 0}ms` }"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
export default {
  setup() {
    const { width, height } = useWindowSize()
    const isMobile = computed(() => {
      return width.value < 768
    })
    return { width, isMobile }
  },
  data() {
    return {
      isHover: false,
      subitemsHeight: '0px',
    }
  },
  props: {
    data: Object,
    isMainParent: {
      type: Boolean,
      default: false,
    },
    isMobileExpanded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setHover(value) {
      this.isHover = value
      const subitemsContainer = this.$refs['subitemsContainer']

      if (value && subitemsContainer) {
        this.subitemsHeight = `${subitemsContainer.clientHeight}px`
      } else {
        this.subitemsHeight = '0px'
      }
    },
  },
}
</script>

<style></style>
