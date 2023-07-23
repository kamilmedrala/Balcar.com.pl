<template>
    <EffectSlide :eventOnly="true" @visible="setVisibility()" class="!absolute !w-auto max-w-full h-full [&_*]:h-full bottom-0 right-0">
        <svg class="px-5 md:pr-20 stroke-gray-lightest w-auto" width="905" height="671" viewBox="0 0 905 671" fill="none" xmlns="http://www.w3.org/2000/svg"
        :class="{'active':isVisible}">
            <path d="M27 505L232 590V317H66V549.5H1L232 669.5L828 549.5V210L564 160V549.5L446 568V429L331.5 435V590L91.5 505V414.5L252 453.5V1L647 117.5V339H281.5V32.5L125 90V568L232 619.5L904 505V374H697V638" stroke="white"/>
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
        }        
    }

}
</script>
<style scoped>

svg{
    stroke-dasharray: 8000;
    stroke-dashoffset: 8000;
    @apply transition-all duration-[5s] md:duration-[7s]
}
svg.active{
    stroke-dashoffset: 0;
}

</style>