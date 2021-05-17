<template>
  <v-card width="100%">
    <v-tabs
      v-model="tab"
      :background-color="getBgForTab"
      color="black"
      centered
      dark
      icons-and-text
      hide-on-leave
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab
        v-for="t in tabs"
        :key="t"
        :href="'#' + t"
        @click="changeSelected(t)"
        active-class="active--tab"
      >
        <v-chip
          small
          :color="getChipColor(t)"
          :text-color="getChipTextColor(t)"
          class="ml-2"
        >
          <v-icon left>{{ getTabIcon(t) }}</v-icon>
          {{ t }}
        </v-chip>
      </v-tab>
    </v-tabs>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "BaseTabSections",
  props: ["tabs", "selected"],
  emits: ["changeSelected"],
  data: () => ({
    tab: null,
  }),
  computed: {
    getBgForTab() {
      return this.tab != "morning" && this.tab != "afternoon"
        ? "primary"
        : this.tab
        ? this.tab
        : "";
    },
  },
  methods: {
    changeSelected(tab) {
      this.$emit("changeSelectedTab", tab);
    },
    getTabIcon(tab) {
      return tab != "morning" && tab != "afternoon"
        ? "mdi-all-inclusive"
        : tab === "morning"
        ? "mdi-brightness-5"
        : "mdi-brightness-4";
    },
    getChipColor(tab) {
      return tab != "morning" && tab != "afternoon" ? "primary" : tab;
    },
    getChipTextColor(tab) {
      return tab != "morning" && tab != "afternoon" ? "white" : "defaultText";
    },
  },
};
</script>

<style scoped></style>
