<template>
    <div class="min-h-screen relative flex flex-col">
        <a href="/" class="p-2 pl-0 flex">
            <nuxt-picture width="49" height="48" format="webp" :src="'/images/Balcar_logo_part.png'"
                title="Strona główna" alt="Balcar logo" class="block h-12 overflow-hidden transition-all duration-300"
                :imgAttrs="{ class: 'h-12 object-cover object-left' }" />
            <nuxt-picture width="150" height="48" format="webp" :src="'/images/Balcar_logo_text.png'"
                title="Strona główna" alt="Balcar logo text"
                class="block h-12 overflow-hidden transition-all duration-300 pl-1 invert-fix translate-y-0"
                :imgAttrs="{ class: 'h-12 object-cover object-left' }" />
        </a>
        <SectionContainer class="py-32">
            <div class="flex flex-col items-center justify-center">
                <span class="text-5xl lg:text-8xl text-gray-dark block mb-10">404</span>
                <a class="relative flex justify-between items-center gap-5 w-fit text-white hover:text text-base md:text-lg px-5 py-2.5 md:px-6 md:py-3 bg-gold-light hover:bg-gold-dark transition duration-200 after:content-[''] after:w-5 after:h-0.5 after:bg-white hover:after:translate-x-2 after:transition after:duration-200 shadow-lg shadow-gold-light/20"
                    href="/">Wróć na stronę główną</a>
            </div>
        </SectionContainer>
    </div>
</template>