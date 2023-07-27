<template>
  <div ref="parallaxContainer" class="relative w-full h-full">
    <div ref="parallaxItem" class="w-full h-full will-change-transform"
    :style="{
        'transform': `translate3d(0,${currentOffset}px,0)`,
        'height': `calc(100% + ${parallaxOffset}px)`}">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useElementBounding } from '@vueuse/core'

export default {
    props:{
        parallaxOffset:{
            type: Number,
            default: 50
        }
    },
    setup(props){
        const parallaxContainer = ref(null)
        const parallaxItem = ref(null)

        const { x, y } = useWindowScroll()
        const { top } = useElementBounding(parallaxContainer)
        const currentOffset = computed(()=>{
            if (!parallaxItem.value) {
                return 0
            }
            // return y.value/2
            return -top.value * (props.parallaxOffset/window.innerHeight)

        })

        return {parallaxContainer,parallaxItem,y,currentOffset,top}
    }
}
</script>

<style>

</style>