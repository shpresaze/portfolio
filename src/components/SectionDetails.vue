<template>
  <div>
    <h3>{{ title }}</h3>
    <h5>{{ subtitle }}</h5>
    <p>{{ dates }}</p>
    <p>
      {{ description }}
    </p>
    <hr />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
    dates: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>