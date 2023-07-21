<template>
  <div class="menu-hamburger relative z-40 w-14 p-2 md:hidden cursor-pointer -mr-3"
  :class="{'active' :isExpanded}"
  >
  <svg viewBox="34 33 35 35" xmlns="http://www.w3.org/2000/svg">
        <path class="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
        <path class="line--2" d="M0 50h99" />
        <path class="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
    </svg>
  </div>
</template>

<script>
export default {
    props:{
        isExpanded:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    .menu-hamburger >>> path {
        fill: none;
        stroke-width: 2;
        @apply transition-all duration-[400ms] stroke-gray-dark
    }

    .menu-hamburger >>> .line--1,
    .menu-hamburger >>> .line--3{
        stroke-dasharray: 27 111.22813415527344;
        stroke-dashoffset: -50.22813415527344;
    }
    .menu-hamburger >>> .line--2{
        stroke-dasharray: 27 99;
        stroke-dashoffset: -38;
    }

    .menu-hamburger.active >>> .line--1,
    .menu-hamburger.active >>> .line--3 {
        stroke-dasharray: 24 111.22813415527344;
        stroke-dashoffset: -16.2;
    }
    .menu-hamburger.active >>>  .line--2 {
        stroke-dashoffset: -20;
        stroke-dasharray: 0 99;
    }
    .active path{
        @apply translate-x-[30px] stroke-gray-lightest
    }

</style>