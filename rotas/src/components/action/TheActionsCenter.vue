<template>
  <v-row
    justify="center"
    align="center"
    class="rounded-lg mt-4 actions-control gray"
  >
    <v-col> <base-display-options @changeView="changeDisplayView" /> </v-col>
    <v-col cols="9"> <user-filtering /> </v-col>
    <!-- <v-col>
      <v-btn color="primary" dark @click="displayAll">All Shifts</v-btn></v-col
    > -->
  </v-row>
</template>

<script>
import UserFiltering from "./UserFiltering.vue";
import { mapActions } from "vuex";
export default {
  components: { UserFiltering },
  name: "TheActionsCenter",
  methods: {
    ...mapActions({
      changeDisplayView: "changeDisplayView",
    }),
  },
};
</script>

<style scoped>
.actions-control {
  border: 1px solid rgb(209, 213, 219);
}
</style>
