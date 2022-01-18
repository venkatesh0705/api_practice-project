<template>
  <div class="p-d-flex p-flex-column p-jc-center p-ai-center">
    <div class="">
      <h1>Data entry Form</h1>
    </div>
    <div class="main_content p-card p-mb-5">
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
        <Buttons class="sub-button" type="submit" @click.prevent="submit()">
          submit
        </Buttons>
      </div>
    </div>
    <div class="table">
      <displayData />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import displayData from "./data.vue";
import InputText from "primevue/inputtext";
import Buttons from "primevue/button";
export default {
  components: {
    displayData,
    InputText,
    Buttons,
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
    ...mapState({
      state: "data",
    }),
  },

  methods: {
    // ...mapMutations(["ADD_USER"]),
    ...mapActions(["add_user"]),
    submit() {
      //
      this.add_user(this.users);

      console.log("users", this.users);
      console.log("state", this.state);
    },
  },
};
</script>

<style>
.main_content {
  max-width: 508px;
  width: 100%;
  padding: 20px;
}
.sub-button {
  display: block !important;
}
</style>
