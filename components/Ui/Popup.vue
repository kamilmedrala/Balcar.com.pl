<template>
    <div class="fixed z-10 inset-0 bg-black/20 flex items-center justify-center overflow-auto max-h-[100dvh] px-5 md:px-14 pt-20 pb-5 md:pb-10">
        <div class="flex flex-col relative max-h-full max-w-7xl bg-white shadow-lg w-full h-full">
            <div class="flex justify-end">
                <button @click.stop="emitClosePopup()" class="group p-2 md:p-3 cursor-pointer">
                    <svg class="stroke-gray-dark group-hover:stroke-gold-light transition duration-200" width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1.70711" y1="1.29289" x2="26.7071" y2="26.2929" stroke-width="2"/>
                        <line x1="1.29289" y1="26.2929" x2="26.2929" y2="1.29289" stroke-width="2"/>
                    </svg>
                </button>
            </div>
            <div class="overflow-auto grow">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        emitClosePopup(){
            this.$emit('close')
        }
    }
}
</script>