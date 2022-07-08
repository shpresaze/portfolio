<template>
  <div
    class="
      d-flex
      justify-content-center
      align-items-center
      flex-column
      gap-1
      container
    "
  >
    <div>
      <button @click="++likes" class="badge rounded-pill darkGreenText me-1">
        <i class="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
      </button>

      <button @click="++dislikes" class="badge rounded-pill text-secondary">
        <i class="fa fa-thumbs-down fa-3x" aria-hidden="true"></i>
      </button>
    </div>
    <p class="d-flex align-items-center">
      <strong class="pe-1"> Liked {{ likesPercentage.toFixed(2) }}% /</strong>

      <strong class="ps-1">
        Disliked {{ dislikePercentage.toFixed(2) }}%
      </strong>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    clickedLike() {
      this.likes++;
    },
  },
  computed: {
    likesPercentage() {
      if (this.likes + this.dislikes === 0) return 0;
      return (this.likes * 100) / (this.likes + this.dislikes);
    },
    dislikePercentage() {
      if (this.likes + this.dislikes === 0) return 0;
      return (this.dislikes * 100) / (this.likes + this.dislikes);
    },
  },
  watch: {},
};
</script>

<style>
</style>