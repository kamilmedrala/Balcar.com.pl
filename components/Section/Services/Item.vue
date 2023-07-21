<template>
    <EffectSlide :eventOnly="true" @visible="setVisibility()">
        <div class="w-full transition duration-500"
        :class="{'-translate-y-full opacity-10':!isVisible}">
            <CommonLink :link="data.url" class="flex justify-between items-center group p-5 md:p-10 bg-gray-lightest hover:bg-gray-light border-b border-b-gray-dark transition duration-300">
                <h2 class="text-lg md:text-xl transition duration-300 group-hover:translate-x-2">
                    {{ data.title }}
                </h2>
                <span class="transition duration-300 stroke-gold group-hover:stroke-white">
                    <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line class="stroke-inherit" y1="-0.5" x2="21.7286" y2="-0.5" transform="matrix(-0.676593 0.736358 -0.73795 -0.674856 16.3911 16)" stroke="black"/>
                        <line class="stroke-inherit" y1="-0.5" x2="21.7286" y2="-0.5" transform="matrix(0.676593 0.736358 0.73795 -0.674856 1.68994 0)" stroke="black"/>
                    </svg>
                </span>
            </CommonLink>
        </div>
    </EffectSlide>
</template>
<script>
export default {
    props:{
        data:{
            type: Object,
            required: true
        }
    },
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