<template>
  <div class="home">
    <HeaderInfos />
    <ContentCV />
  </div>
</template>

<script>
// @ is an alias to /src
import ContentCV from "../components/ContentCV.vue";
import HeaderInfos from "../components/HeaderInfos.vue";
export default {
  name: "HomeView",
  components: {
    HeaderInfos,
    ContentCV,
  },
};
</script>
