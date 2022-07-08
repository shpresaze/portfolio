<template>
  <div>
    <i
      class="fa iconClass fa-3x green-text"
      :class="iconClass"
      aria-hidden="true"
    >
      <span class="dark-green-text"> {{ title }} </span></i
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