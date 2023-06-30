<template>
  <div class="flex justify-between">
    Navbar

    <ul>
      <li v-for="item in menuData" :key="item.ID">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  computed: {
    menuData() {
      return this.$store.getters['getMenus'].items
    }
  },
}
</script>

<style>

</style>