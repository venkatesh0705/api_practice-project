<template>
  <div>
    <!-- <HelloWorld /> -->
    <forms />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import forms from "./components/form.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    forms,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
