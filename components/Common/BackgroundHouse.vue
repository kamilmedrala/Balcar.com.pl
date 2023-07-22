<template>
    <EffectSlide :eventOnly="true" @visible="setVisibility()" class="!absolute !w-auto max-w-full bottom-10 right-0">
          <svg class="md:pr-10 stroke-gray-light/80" width="1030" height="441" viewBox="0 0 1030 441" fill="none" xmlns="http://www.w3.org/2000/svg"
          :class="{'active':isVisible}">
            <path d="M-48 341H83V282.5L308.5 264.071V205L645 155.5V326V435L682.25 422V322.25L719.5 318.5V412.952L927 341V211.5L623 141L601 147V248.574L130 282.5V218.5L623 123.5L932 207.5V328.406L1029.5 299.505V269.5L623 247V440L575.5 432.952V326L308.5 322.25V383.098L239.5 372.86V326L90.5698 322.25V341M424 12.5L623 107L929 196L691.5 78.5L419.5 1L289 175.5L124 209.5V347.5"/>
        </svg>
    </EffectSlide>
</template>
<script>
export default {
    data(){
        return{
            isVisible: false
        }
    },
    methods:{
        setVisibility(){
            this.isVisible = true
            console.log('kurwaaaa');
        }        
    }

}
</script>
<style scoped>

svg{
    stroke-dasharray: 5150;
    stroke-dashoffset: 5150;
    @apply transition-all duration-[5s] md:duration-[7s]
}
svg.active{
    stroke-dashoffset: 0;
}

</style>