<template>
  <div>
    <forms />
    <slotParent />
    <br />
    <hr />
    <mixin_practice />
  </div>
</template>

<script>
import forms from "./components/form.vue";
import slotParent from "./components/slot practice/slot parent.vue";
import mixin_practice from "./components/mixins/index.vue";
export default {
  name: "App",
  components: {
    forms,
    slotParent,
    mixin_practice,
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
