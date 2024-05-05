<template>
    <div>
        <SectionContent v-if="data.content" :data="data" />
        <ul v-if="projectsList.length > 0" class=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20">
            <SectionProjectsTile v-for="project in projectsList" :key="project.id" :data="project" />
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed:{
        projectsList(){
            return this.$store.getters.getProjects
        }
    }
}
</script>