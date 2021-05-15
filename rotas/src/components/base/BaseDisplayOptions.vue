<template>
  <v-row>
    <v-col>
      <v-btn outlined color="primary" dark @click="setDisplayType('accordion')"
        ><v-icon>mdi-view-list</v-icon></v-btn
      >
      <v-btn outlined color="success" dark @click="setDisplayType('calendar')"
        ><v-icon>mdi-calendar</v-icon></v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  emits: ["changeView"],
  name: "BaseDisplayOptions",
  methods: {
    setDisplayType(type) {
      this.$emit("changeView", type);
    },
  },
};
</script>

<style></style>
