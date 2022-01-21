<template>
  <div>
    <div class="child1">
      <h1>mixin practice</h1>
      <child />
    </div>
    <br />
    <hr />
    <br />
    <div class="child2">
      <child1 />
    </div>
  </div>
</template>

<script>
import child from "./child.vue";
import child1 from "./child1.vue";
export default {
  name: "mixin_practice",
  components: {
    child,
    child1,
  },
};
</script>

<style></style>
