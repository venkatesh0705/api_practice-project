<template>
  <div class="">
    <div class="header p-text-center">
      <h1>Data entry Form</h1>
    </div>
    <div class="main_content p-d-flex p-jc-center p-card p-mb-5">
      <div class="container">
        <div class="p-mb-4 p-fluid">
          <div>
            <div class="firstName">firstName</div>
          </div>
          <div>
            <InputText type="text" id="firstName" v-model="users.firstName" />
          </div>
        </div>
        <div class="p-mb-4 p-fluid">
          <div>
            <div for="lastName">lastName</div>
          </div>
          <div>
            <InputText type="text" id="lastName" v-model="users.lastName" />
          </div>
        </div>
        <div class="p-mb-4 p-fluid">
          <div>
            <div class="label">age</div>
          </div>
          <div>
            <InputText type="number" id="age" v-model="users.age" />
          </div>
        </div>
        <div class="p-mb-4 p-fluid">
          <Buttons
            class="sub-button p-button-lg"
            type="submit"
            @click.prevent="submit()"
          >
            submit
          </Buttons>
        </div>
      </div>
    </div>
    <div class="table">
      <tabledata />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import InputText from "primevue/inputtext";
import Buttons from "primevue/button";
import tabledata from "./datatable.vue";
export default {
  components: {
    InputText,
    Buttons,
    tabledata,
  },
  data() {
    return {
      users: {
        firstName: "",
        lastName: "",
        age: null,
      },
    };
  },

  computed: {
    ...mapState(["data"]),
  },

  methods: {
    // ...mapMutations(["ADD_USER"]),
    ...mapActions(["add_user", "fetchData"]),
    submit() {
      //
      this.add_user(this.users);

      console.log("users", this.users);
      console.log("state", this.state);
    },
  },
  created() {
    this.fetchData;
  },
};
</script>

<style>
.container {
  max-width: 508px;
  width: 100%;
  padding: 20px;
}
.sub-button {
  display: block !important;
}
.table {
  display: block !important;
}
</style>
