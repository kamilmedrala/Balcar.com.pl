<template>
    <div class="w-full grid grid-cols-3 md:grid-cols-5">
        <div v-if="Object.keys(data).length < 5" class="hidden md:block" ></div>
        <div v-for="counter,index in data" :key="index"
        class="relative group "
        :class="[
            { 'mt-52' :index == 'counter_2'},
            { 'mt-10' :index == 'counter_3'},
            { 'mt-10 md:mt-32 col-start-3 md:col-start-5' :index == 'counter_4'}
            ]">
            <EffectParallax class="!h-auto" 
            :parallaxOffset="index == 'counter_2' ? 90 : (index == 'counter_4' ? 60 : 40)">
                <EffectSlide>
                    <div class="w-full flex flex-col pl-2 md:pl-4 text-gray-dark">
                        <span class="block max-w-full break-all text-5xl md:text-7xl group-odd:text-4xl group-odd:md:text-5xl">
                            {{ counter.value }}
                            <span v-if="counter.symbol !== 'brak'" class="text-2xl md:text-4xl">
                                {{ counter.symbol }}
                            </span> 
                        </span>
                        <p class="text-xs md:text-base">{{ counter.content }}</p>
                    </div>
                </EffectSlide>
            </EffectParallax>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        data:{
            type: Object,
            required: true
        }
    }

}
</script>