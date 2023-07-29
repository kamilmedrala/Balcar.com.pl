<template>
    <div class="hidden md:block fixed h-screen top-0 z-30">
        <div class="flex flex-col border-0 border-r border-solid border-gray-500 h-36 relative top-1/3 left-1 xl:left-5 z-20 transition-opacity duration-200"
        :class="{'opacity-0':height < screenHeight + 200}">
            <div class="relative w-6 h-full -top-24 translate-y-24 text-gray-500 overflow-hidden">
                <span class="absolute -right-12 top-14 flex items-center -rotate-90 whitespace-nowrap transition duration-200 cursor-pointer"
                :class="{'translate-x-6':y > 100 || !isMounted}"
                @click="scrollLower()">
                    <svg class="rotate-180 fill-gray-500 mr-3" width="18" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6 0.111816L14.2742 1.43762L19.899 7.06244H0.513672V8.9375H19.8988L14.2742 14.5621L15.6 15.8879L23.4882 7.99988L15.6 0.111816Z"/>
                    </svg>
                    Przewiń w dół
                </span>
                <span class="absolute -right-[46px] top-14 flex items-center -rotate-90 whitespace-nowrap transition duration-200 cursor-pointer"
                :class="{'translate-x-6':y + screenHeight + 200 < height || !isMounted}"
                @click="scrollToTop()">
                    Wróć do góry
                    <svg class="fill-gray-500 ml-3" width="18" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.6 0.111816L14.2742 1.43762L19.899 7.06244H0.513672V8.9375H19.8988L14.2742 14.5621L15.6 15.8879L23.4882 7.99988L15.6 0.111816Z"/>
                    </svg>
                </span>
            </div>
            <span class="absolute w-1 h-1 rounded-full -top-0.5 -right-0.5 bg-gray-500 transition-opacity duration-200"
            :class="{'opacity-0' : y <= 0}"
            :style="{transform: `translateY(${scrollPercent}px)`}"></span>
        </div>
    </div>
</template>

<script>
import {useWindowScroll, useWindowSize} from '@vueuse/core'
import { computed, onMounted, watch, ref } from 'vue'
export default {
setup(props){
    const { x, y } = useWindowScroll()
    const {width: screenWidth, height: screenHeight} = useWindowSize()
    const height = ref(0)
    const isMounted = ref(false)

    const scrollPercent = computed(()=>{
        return (y.value / (height.value - screenHeight.value) ) * 144
    })

    onMounted(()=>{
        setDocHeight()
        isMounted.value = true
    })
    watch(y,()=>{
        setDocHeight()
    })
    watch(screenWidth,()=>{
        setDocHeight()
    })
    watch(screenHeight,()=>{
        setDocHeight()
    })
    
    function setDocHeight(){
        if (document) {
            const documentHeight = document.querySelector('body').offsetHeight
            height.value = documentHeight
        }
    }

    function scrollLower(){
        if (window) {
            const scrollDistance = props.scrollDownVal ? props.scrollDownVal : screenHeight.value - 64
            window.scrollTo(0,scrollDistance)
        }
    }

    function scrollToTop(){
        if (window) {
            window.scrollTo(0,0)
        }
    }

    return { y, scrollPercent, screenWidth,screenHeight, height ,isMounted, scrollToTop,scrollLower,setDocHeight }
},
created(){
    this.$nuxt.$on('transitionEnd',()=>{
        this.setDocHeight()
    })
},
props:{
    scrollDownVal: {
        type: Number
    }
}
}
</script>

<style>

</style>