<template>
  <div class="normal_table">
    <!-- <table border="1">
      <thead>
        <tr>
          <th>id</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data of this.ALL_USERS" :key="data.key">
          <td>{{ data.id }}</td>
          <td>{{ data.firstName }}</td>
          <td>{{ data.lastName }}</td>
          <td>{{ data.age }}</td>
        </tr>
      </tbody> -->
    <!-- </table> -->
  </div>
</template>

<script>
// import DataTable from "primevue/datatable";
import { mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      user: [],
    };
  },

  methods: {
    ...mapActions(["fetchData"]),
  },

  // computed: {
  //   ...mapGetters(["ALL_USERS"]),
  // },
  apiService: null,
  // lifecycle methods
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
