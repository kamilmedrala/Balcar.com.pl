<template>
    <div class="text-gray-dark ">
        <div v-if="data" class="mb-24 md:[&_ul]:columns-2 [&_li]:mb-8 md:[&_li]:mr-10 [&_li_h4]:mb-1 [&_li_h4]:text-xl md:[&_li_h4]:text-2xl text-base md:text-lg
        [&_li_h4]:before:content-[''] [&_li_h4]:before:bg-gray-dark [&_li_h4]:before:h-6 [&_li_h4]:before:w-px [&_li_h4]:before:mr-2 [&_li_h4]:before:inline-block [&_li_h4]:before:-mb-1
        " v-html="data">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type: String,
            required: true
        },
    }
}
</script>