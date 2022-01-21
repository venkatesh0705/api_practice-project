<template>
  <div>
    {{ count }}
    <button @mouseover="increment()">hover me</button>
  </div>
</template>

<script>
import counter from "./mixin";
export default {
  mixins: [counter],
};
</script>

<style></style>
