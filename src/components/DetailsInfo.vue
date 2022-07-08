<template>
  <div>
    <p>
      <i
        class="fa iconClass green-text fa-2x"
        :class="iconClass"
        aria-hidden="true"
      ></i>
      <span class="text-dark"
        ><strong class="dark-green-text"> {{ title }} : </strong>
        {{ description }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
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