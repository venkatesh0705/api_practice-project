<template>
  <div class="card">
    <h1>named slot-practice code</h1>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot> default text content </slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "namedSlot",
};
</script>

<style scoped>
.card {
  border: 1px solid black;
  max-width: 400px;
  width: 100%;
  box-shadow: 6px 11px 16px 3px black;
  padding: 15px;
  background-color: cornsilk;
}

.card h1 {
  text-align: center;
}

.card .header {
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
  border: 1px solid black;
  margin-bottom: 3px;
}
.card .content {
  height: 200px;
  text-align: center;
  border: 1px solid black;
  margin-bottom: 3px;
}

.card .footer {
  border: 1px solid black;
  height: 45px;
  text-align: center;
}
</style>
