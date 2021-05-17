<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <the-actions-center />
      </v-col>

      <v-col v-if="!isLoaded">
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
      <base-tab-sections
        v-else
        class="mt-8"
        :tabs="availableShifts"
        @changeSelectedTab="changeSelectedShift"
      >
        <component :is="displayType" :shifts="shift" />
      </base-tab-sections>
    </v-row>
  </v-container>
</template>

<script>
import TheActionsCenter from "./action/TheActionsCenter.vue";
import AccordionRotas from "./accordion-view/AccordionRotas.vue";
import CalendarRotas from "./calendar-view/CalendarRotas.vue";
import { mapGetters } from "vuex";

export default {
  components: { TheActionsCenter },
  name: "Dashboard",
  computed: {
    getSelectedRotas() {
      return this.$store.getters["rotas/getRota"];
    },
    displayType() {
      const displayView = this.$store.getters.getDisplayView;
      return displayView === "accordion" ? AccordionRotas : CalendarRotas;
    },
    isLoaded() {
      return this.shift.length > 0;
    },
    ...mapGetters({
      shift: "rotas/getShift",
      selectedShift: "rotas/getSelectedShift",
      availableShifts: "rotas/getAvailableShifts",
      loaded: "rotas/isLoaded",
    }),
  },
  methods: {
    changeSelectedShift(shift) {
      this.$store.dispatch("rotas/changeShift", shift);
    },
  },
};
</script>
