<template>
  <div id="app">
    <Navbar />
    <HeaderInfos />
    <ContentCV />

    <!--    <ContentCV />-->
  </div>
</template>
<script>
import ContentCV from "./components/ContentCV.vue";
import HeaderInfos from "./components/HeaderInfos.vue";
import Navbar from "./components/layout/Navbar.vue";

export default {
  components: {
    Navbar,
    HeaderInfos,
    ContentCV,
  },
  // ...
};
</script>


<style lang="scss">
</style>