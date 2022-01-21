<template>
  <div>
    {{ count }}
    <button @click="increment()">increment</button>
  </div>
</template>

<script>
import counter from "./mixin";
export default {
  mixins: [counter],
  data() {
    return {
      count: 100,
    };
  },
};
</script>

<style></style>
