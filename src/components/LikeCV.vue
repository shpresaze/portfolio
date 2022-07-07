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
      <button @click="++likes">
        <i class="fa fa-thumbs-up" aria-hidden="true">Like CV</i>
      </button>

      <button @click="++dislikes">
        <i class="fa fa-thumbs-down" aria-hidden="true">Dislike CV</i>
      </button>
    </div>
    <p class="d-flex align-items-center text-break">
      <strong class="pe-1">Liked</strong> {{ likesPercentage.toFixed(2) }}% -
      {{ dislikePercentage.toFixed(2) }}%
      <strong class="ps-1">Disliked</strong>
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