<template>
  <v-row no-gutters justify="center">
    <v-expansion-panels>
      <accordion-rota-item v-for="(item, i) in shifts" :key="i" :shift="item" />
    </v-expansion-panels>
  </v-row>
</template>

<script>
import AccordionRotaItem from "./AccordionRotaItem.vue";
export default {
  components: { AccordionRotaItem },
  name: "AccordionRotas",
  props: ["shifts"],
};
</script>

<style></style>
