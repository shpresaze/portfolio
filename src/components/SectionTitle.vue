<template>
  <div>
    <i class="fa iconClass fa-2x" :class="iconClass" aria-hidden="true">
      {{ title }}</i
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