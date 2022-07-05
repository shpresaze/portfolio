<template>
  <div>
    <p>
      <strong> {{ title }}: </strong>
    </p>
    <div class="progress">
      <div
        class="progress-bar bg-success"
        role="progressbar"
        :style="styleObject"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    progress: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      styleObject: {
        width: this.progress + "%",
      },
    };
  },
};
</script>

<style>
</style>