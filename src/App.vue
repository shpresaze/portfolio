<template>
  <div id="app">
    <navbar></navbar>
    <header-infos></header-infos>
  </div>
</template>
<script>
import HeaderInfos from "./components/HeaderInfos.vue";
import Navbar from "./components/layout/Navbar.vue";

export default {
  components: {
    Navbar,
    HeaderInfos,
  },
  // ...
};
</script>


<style lang="scss">
</style>