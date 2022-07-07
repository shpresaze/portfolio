<template>
  <div class="container headerBackground p-0 text-white">
    <div class="row d-flex justify-content-between">
      <div class="col-sm-12 col-md-2 col-lg-2">
        <img
          src="../assets/images/shpresa-image.jpeg"
          class="img-fluid ratio ratio-5x3"
        />
      </div>
      <div
        class="
          col-sm-12 col-md-5 col-lg-5
          mh-100
          d-flex
          justify-content-center
          flex-column
          p-4
          float-sm-start
        "
      >
        <h1>Shpresa Zendeli</h1>
        <h5>Software Engineering student</h5>
      </div>
      <div
        class="
          col-sm-12 col-md-4 col-lg-4
          d-flex
          align-items-center
          justify-content-center
          mh-100
          pt-5
          text-center
          flex-column
        "
      >
        <h1>CV</h1>
        <br />
        <LikeCV />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import LikeCV from "../components/LikeCV.vue";
export default {
  components: {
    LikeCV,
  },
  data() {
    return {};
  },
};
</script>
