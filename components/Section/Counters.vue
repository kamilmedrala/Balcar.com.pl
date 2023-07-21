<template>
    <div class="relative w-full grid gap-x-5 gap-y-10 md:gap-0 grid-cols-2 md:grid-cols-4">
        <div v-for="counter,name,index in data" :key="name"
        class="relative z-20 group">
                <EffectSlide :delay="index * 150">
                    <div class="w-full flex flex-col pl-2 md:pl-4 text-gray-dark">
                        <span class="block max-w-full break-all text-5xl md:text-7xl">
                            {{ counter.value }}
                            <span v-if="counter.symbol !== 'brak'" class="text-2xl md:text-4xl">
                                {{ counter.symbol }}
                            </span> 
                        </span>
                        <p class="text-xs md:text-base">{{ counter.content }}</p>
                    </div>
                </EffectSlide>
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