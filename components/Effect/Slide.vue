<template>
    <div ref="target" class="w-full overflow-hidden" >
        <div class="w-full transition duration-1000" :class="{'-translate-x-full opacity-10':!targetIsVisible}">
            <slot>
    
            </slot>
        </div>
    </div>

</template>
<script>
import { useIntersectionObserver } from '@vueuse/core'
import { onMounted, ref } from 'vue'
    
export default {
    setup(){
        const target = ref(null)
        const isMounted = ref(false)
        const targetIsVisible = ref(false)

        useIntersectionObserver(target,([{ isIntersecting }])=>{
            console.log(isIntersecting);
            if (!targetIsVisible.value && isIntersecting) {
                targetIsVisible.value = true
            }
        },{
            rootMargin: '-50px'
        })
        return {target, targetIsVisible}
    }

}
</script>