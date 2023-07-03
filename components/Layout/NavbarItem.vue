<template>
  <div class="relative flex"
  @mouseenter="setHover(true)"
  @mouseleave="setHover(false)">
    <CommonLink :link="data.url" class="text-gray-dark hover:text-gold transition duration-200"
    :class="[
        {'peer' :data.child_items},
        [isMainParent ? 'p-5 border-0 border-l border-transparent transition duration-200' : 'py-2 px-3 ml-2'],
        {'bg-white !border-l-gray-dark' :isMainParent && isHover}
    ]">
        {{ data.title }}
    </CommonLink>
    <div v-if="data.child_items" class="absolute top-full left-0 min-w-[220px] shadow-none overflow-hidden transition-all duration-[400ms]"
    :class="{'shadow-md':isHover}"
    :style="{height: subitemsHeight}"
    >
        <div ref="subitemsContainer" class="pt-1">
            <ul class="bg-white border-0 border-l border-gray-dark">
                <li v-for="item,index in data.child_items" :key="item.id">
                    <LayoutNavbarItem :data="item"
                    class="opacity-0 -translate-x-10 transition-all duration-300" 
                    :class="{'!opacity-100 !translate-x-0': isHover}" 
                    :style="{'transition-delay' : `${isHover? index * 100 : 0}ms`}" />
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isHover: false,
            subitemsHeight: '0px'
        }
    },
    props:{
        data: Object,
        isMainParent:{
            type: Boolean,
            default: false
        }
    },
    methods:{
        setHover(value){
            this.isHover = value;
            const subitemsContainer = this.$refs['subitemsContainer']
            
            if (value && subitemsContainer) {
                this.subitemsHeight = `${subitemsContainer.clientHeight}px`                
            }else{
                this.subitemsHeight = '0px'
            }
        },
    },
}
</script>

<style>

</style>