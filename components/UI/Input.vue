<template>
    <div class="relative w-full basis-full" :class="{'lg:basis-[calc(50%_-_10px)]':type === 'text'}">
        <input v-model="value" :name="name" :type="type" :required="required" placeholder=" " class="peer" @change="validate()" @input="isValid ? null : validate()"
        :class="{'!border-red-600':!isValid}">
        <label :for="name" class="absolute peer-placeholder-shown:text-base px-5 py-2 peer-placeholder-shown:md:text-lg text-xs peer-focus-visible:text-xs md:text-sm peer-focus-visible:md:text-sm top-6 md:-top-7 left-0 peer-focus-visible:-top-6 peer-focus-visible:md:-top-7 peer-placeholder-shown:top-0 text-gray-400 transition-all duration-300 pointer-events-none">
            {{ text }}
        </label>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value: '',
            isValid: true
        }
    },
    props:{
        type:{
            type: String,
            default: 'text'
        },
        required:{
            type: Boolean,
            default: false
        },
        name:{
            type: String,
        }, 
        text:{
            type: String,
        }, 
    },
    methods:{
        validate(){
            if (this.required && this.value.length <= 0 ) {
                this.isValid = false
                return
            }

            if (this.type == 'email') {
                const regex = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g)
                this.isValid = regex.test(this.value)
                return
            }

            if (this.type == 'tel') {
                const regex = new RegExp(/\p{L}/ui)
                this.isValid = !regex.test(this.value)
                return
            }

            this.isValid = true

        }
    }
}
</script>
<style scoped>
input{
    @apply w-full px-5 py-2 border border-gray-light text-base md:text-lg focus-visible:border-gray-dark !outline-none transition duration-200;
}
</style>