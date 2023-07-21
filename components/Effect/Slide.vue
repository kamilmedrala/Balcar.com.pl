<template>
    <div ref="target" class="w-full overflow-hidden relative" >
        <div class="w-full transition delay-300 duration-700" :class="{'-translate-x-full opacity-10':!targetIsVisible && !eventOnly}">
            <slot>
                
            </slot>
        </div>
        <div v-if="!eventOnly" class="absolute left-0 top-0 h-full w-px bg-gray-dark transition duration-500"
        :class="{'-translate-y-full opacity-10':!targetIsVisible}">
        </div>
    </div>

</template>
<script>
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
    
export default {
    emits: ['visible'],
    setup(props, {emit}){
        const target = ref(null)
        const targetIsVisible = ref(false)

        useIntersectionObserver(target,([{ isIntersecting }])=>{
            if (!targetIsVisible.value && isIntersecting) {
                setTimeout(()=>{
                    targetIsVisible.value = true
                    emit('visible')
                },props.delay)
            }
        },{
            rootMargin: '-50px'
        })
        return {target, targetIsVisible}
    },
    props:{
        eventOnly: {
            type: Boolean,
            default: false
        },
        delay: {
            type:Number,
            default: 0
        }
    },

}
</script>