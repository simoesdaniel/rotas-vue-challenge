<template>
  <v-row>
    <v-col>
      <v-btn
        class="mx-2"
        fab
        dark
        color="indigo"
        absolute
        right
        :v-bind="binding"
        :v-on="action"
      >
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "BaseFloatingButton",
  props: {
    action: {
      type: Object,
      required: true,
    },
    binding: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
