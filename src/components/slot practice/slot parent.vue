<template>
  <!-- named slot practice code -->
  <div>
    <div class="namedslot">
      <div>named slot practice</div>
      <div class="container">
        <namedSlot>
          <template v-slot:header> content 1 header </template>
          <template v-slot:footer> content 1 footer </template>
        </namedSlot>
        <namedSlot>
          <template v-slot:header> content 2 header </template>
          <template v-slot:footer> content 2 footer </template>
        </namedSlot>
        <namedSlot>
          <template v-slot:header> content 3 header </template>
          <template v-slot:footer> content 3 footer </template>
        </namedSlot>
      </div>
      <hr />
      <hr />
      <hr />
    </div>

    <!-- slot props practice code -->
    <div class="slotprops">
      <!-- slot 1 -->
      <slotProp>
        <template v-slot:default="slotProps">
          {{ slotProps.firstName }}
          {{ slotProps.lastName }}
        </template>
      </slotProp>

      <!-- slot 2 -->
      <slotProp>
        <template v-slot:default="slotProps">
          {{ slotProps.lastName }}
          {{ slotProps.firstName }}
        </template>
      </slotProp>

      <!-- slot 3 -->
      <slotProp>
        <template v-slot:default="slotProps">
          {{ slotProps.lastName }}
        </template>
      </slotProp>

      <!-- slot 4 -->
      <slotProp>
        <template v-slot:default="slotProps">
          {{ slotProps.firstName }}
        </template>
      </slotProp>
    </div>
  </div>
</template>

<script>
import namedSlot from "../slot practice/namedslot child.vue";
import slotProp from "../slot practice/slot props.vue";
export default {
  name: "slotParent",
  components: {
    namedSlot,
    slotProp,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-between;
}

.slotprops {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
