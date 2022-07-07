<template>
  <div>
    <i
      class="fa iconClass fa-3x darkGreenText"
      :class="iconClass"
      aria-hidden="true"
    >
      <span class="text-dark"> {{ title }} </span></i
    >
    <br />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>