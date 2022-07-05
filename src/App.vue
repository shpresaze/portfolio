<template>
  <div id="app">
    <Navbar />
    <HeaderInfos />
    <LanguageProgress title="English" progress="75" />

    <!--    <ContentCV />-->
  </div>
</template>
<script>
import LanguageProgress from "./components/LanguageProgress.vue";
import ContentCV from "./components/ContentCV.vue";
import HeaderInfos from "./components/HeaderInfos.vue";
import Navbar from "./components/layout/Navbar.vue";

export default {
  components: {
    Navbar,
    HeaderInfos,
    ContentCV,
    LanguageProgress,
  },
  // ...
};
</script>


<style lang="scss">
</style>