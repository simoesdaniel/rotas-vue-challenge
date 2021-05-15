<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <the-actions-center />
      </v-col>
      <component :is="displayType" />
    </v-row>
  </v-container>
</template>

<script>
import TheActionsCenter from "./action/TheActionsCenter.vue";
import AccordionRotas from "./accordion-view/AccordionRotas.vue";
import CalendarRotas from "./calendar-view/CalendarRotas.vue";
export default {
  components: { TheActionsCenter },
  name: "Dashboard",

  data: () => ({}),
  computed: {
    displayType() {
      const displayView = this.$store.getters.getDisplayView;
      return displayView === "accordion" ? AccordionRotas : CalendarRotas;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("setDefaultDisplayView");
  },
};
</script>
