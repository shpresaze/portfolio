<template>
  <div>
    <nav><router-link to="/"> Home</router-link></nav>
    <router-view />
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>

<style  lang="scss">
nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
