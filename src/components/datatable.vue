<template>
  <div class="primevue table">
    <DataTable
      :value="user"
      showGridlines
      stripedRows
      responsiveLayout="scroll"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      :paginator="true"
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20]"
      currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
      dataKey="id"
      :filters="filters1"
      filterDisplay="Menu"
      :loading="loading1"
      :globalFilterFields="['id', 'firstName', 'lastName', 'age']"
      @selection="selectedItem"
      removableSort
    >
      <template #header>
        <div class="p-d-flex p-jc-end">
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Clear"
            class="p-button-outlined"
            @click="clearFilter1()"
          />
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters1['global'].value"
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </template>
      <template #empty> No customers found. </template>
      <template #loading> Loading customers data. Please wait. </template>
      <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
      <Column field="id" header="Id" :sortable="true"></Column>
      <Column field="firstName" header="firstName" :sortable="true"></Column>
      <Column field="lastName" header="lastName" :sortable="true"></Column>
      <Column field="age" header="Age" :sortable="true"></Column>
      <template #footer>
        <h3>total users:{{ user ? user.length : 0 }}</h3>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Column from "primevue/column";
import { mapGetters } from "vuex";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import Apiservice from "../api/index";
export default {
  components: {
    DataTable,
    Column,
    InputText,
    Button,
  },
  data() {
    return {
      user: null,
      filters1: null,
      loading1: false,
      selectedItem: null,
    };
  },
  apiService: null,

  created() {
    this.initfilters1();
    this.apiService = new Apiservice();
  },
  methods: {
    clearFilter1() {
      this.initfilters1();
    },
    initfilters1() {
      this.filters1 = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        id: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
        firstName: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        lastName: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        age: {
          operator: FilterOperator.AND,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
      };
    },
  },
  computed: {
    ...mapGetters({
      person: "ALL_USERS",
    }),
  },

  updated() {
    console.log("vuex store user", this.person);
  },

  mounted() {
    this.apiService
      .apiData()
      .then((data) => (this.user = data))
      .catch((err) => console.log("err", err));
  },
};
</script>

<style></style>
