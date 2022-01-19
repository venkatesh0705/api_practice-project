<template>
  <div class="primevue table">
    <DataTable
      :value="person"
      showGridlines
      stripedRows
      responsiveLayout="scroll"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :paginator="true"
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      removableSort
    >
      <template #header> users </template>
      <Column field="id" header="Id" :sortable="true"></Column>
      <Column field="firstName" header="firstName" :sortable="true"></Column>
      <Column field="lastName" header="lastName" :sortable="true"></Column>
      <Column field="age" header="Age" :sortable="true"></Column>
      <template #footer>
        <h3>total users:{{ person ? person.length : 0 }}</h3>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { mapGetters } from "vuex";
export default {
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      user: [],
    };
  },
  computed: {
    ...mapGetters({
      person: "ALL_USERS",
    }),
  },
  apiService: null,

  updated() {
    console.log("vuex store user", this.person);
  },
};
</script>

<style></style>
