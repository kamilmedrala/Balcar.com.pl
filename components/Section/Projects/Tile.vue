<template>
    <li class="border-gray-light hover:border-gold-light border border-solid transition duration-200" @click="openPdfPopup()">
        <div class="group flex flex-col h-full cursor-pointer">
            <div class="w-full bg-gray-lightest aspect-[55/30]">
                <nuxt-picture
                v-if="data.acf?.image?.url"
                width="550"
                height="300"
                :src="data.acf.image.url"
                :alt="data.acf.image.alt ?? ''" 
                class="w-full h-auto object-cover object-left-bottom"
                loading="lazy"
                :imgAttrs="{class: 'w-full h-auto object-cover object-left-bottom'}"
                />
            </div>
            
            <div class="p-5 pt-3 bg-white w-full grow">
                <h4 v-if="data.title.rendered" class="font-semibold text-xl md:text-2xl mb-2.5 group-hover:text-gold-light transition duration-200">{{ data.title.rendered }}</h4>
                <p v-if="data.acf?.area" class="mb-2.5 text-base md:text-lg"> Pow. zabudowy: <span class="text-lg md:text-xl font-semibold">{{ data.acf.area }}</span> m<sup>2</sup></p>
                <svg v-if="data.acf?.pdf_file" class="ml-auto fill-gray-light group-hover:fill-gold-light transition duration-200" width="40px" height="40px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                    <path d="M212.00781,96a3.98105,3.98105,0,0,0-1.21924-2.8678L154.83008,37.1734a4.018,4.018,0,0,0-.606-.49683c-.05322-.03582-.11377-.05859-.16894-.09173a3.96759,3.96759,0,0,0-.51758-.27655c-.07959-.03308-.165-.04846-.2461-.07636a3.94168,3.94168,0,0,0-.50048-.15216A3.99584,3.99584,0,0,0,152,36H55.99219a12.01343,12.01343,0,0,0-12,12v88a4,4,0,0,0,8,0V48a4.00427,4.00427,0,0,1,4-4H148V96a4.0002,4.0002,0,0,0,4,4h52v36a4,4,0,0,0,8,0V96.08C212.00049,96.05267,212.00781,96.0274,212.00781,96ZM156,49.65692,198.34277,92H156ZM64,164H48a4.0002,4.0002,0,0,0-4,4v48a4,4,0,0,0,8,0V204H64a20,20,0,0,0,0-40Zm0,32H52V172H64a12,12,0,0,1,0,24Zm60-32H112a4.0002,4.0002,0,0,0-4,4v48a4.0002,4.0002,0,0,0,4,4h12a28,28,0,0,0,0-56Zm0,48h-8V172h8a20,20,0,0,1,0,40Zm88-44a4.0002,4.0002,0,0,1-4,4H184v20h20a4,4,0,0,1,0,8H184v16a4,4,0,0,1-8,0V168a4.0002,4.0002,0,0,1,4-4h28A4.0002,4.0002,0,0,1,212,168Z"/>
                </svg>
            </div>
        </div>
        <transition name="fade">
            <UiPopup v-if="data.acf?.pdf_file && popupActive"  @close="closePdfPopup">
                <object :data="data.acf.pdf_file" type="application/pdf" width="100%" height="100%">
                    <iframe :src="data.acf.pdf_file" frameborder="0"></iframe>
                </object>
            </UiPopup>
        </transition>
    </li>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            popupActive: false
        }
    },
    methods:{
        openPdfPopup(){
            this.popupActive = true
        },
        closePdfPopup(){
            this.popupActive = false
        },


    }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>