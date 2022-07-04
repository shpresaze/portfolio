<template>
  <div id="app">
    <Navbar />
    <HeaderInfos />
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