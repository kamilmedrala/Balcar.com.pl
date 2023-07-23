<template>
    <footer class="py-10 bg-gray-dark">
        <div class="custom-container">
            <div class="w-full flex flex-col md:flex-row gap-10 md:gap-0">
                <div class="md:basis-1/2 md:pr-10">
                    <ul v-if="menu" class="text-base md:text-lg font-extralight">
                        <li v-for="item in menu" class="text-gray-lightest">
                            <CommonLink :link="item.url" class="block py-1 hover:text-gold-light transition duration-200">
                                {{ item.title }}
                            </CommonLink>
                            <ul v-if="item.child_items" class="mb-2 pl-2 border-l border-gray-light/20">
                                <li v-for="itemNested in item.child_items">
                                    <CommonLink :link="itemNested.url" class="block py-1 hover:text-gold-light transition duration-200">
                                        {{ itemNested.title }}
                                    </CommonLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="md:basis-1/2 md:pr-10">
                    <CommonContactData />
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    props:{
        menu: Array,
    }
}
</script>