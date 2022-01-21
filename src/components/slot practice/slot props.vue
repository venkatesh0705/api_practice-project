<template>
  <div class="card">
    <h1>slot prop-practice code</h1>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content" v-for="name of user" :key="name.firstName">
      <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "slotProp",
  data() {
    return {
      user: [
        { firstName: "venkatesan", lastName: "m" },
        { firstName: "naveenkumar", lastName: "s" },
        { firstName: "athistakumar", lastName: "v" },
      ],
    };
  },
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
