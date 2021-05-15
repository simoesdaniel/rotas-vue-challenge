<template>
  <v-input
    :messages="[data]"
    append-icon="mdi-close"
    prepend-icon="mdi-calendar"
    @click:append="clear"
    class="rounded-lg input-date-picker gray pa-2"
    :class="isFilled"
  >
    {{ label }}
  </v-input>
</template>

<script>
export default {
  name: "BaseReadOnlyInput",
  emits: ["clear"],
  props: {
    data: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    isFilled() {
      return this.data !== "DD-MM-YYYY" ? "input-date-picker--done" : "";
    },
  },
  methods: {
    clear() {
      this.$emit("clear");
    },
  },
};
</script>

<style scoped>
.input-date-picker {
  border: 1px solid rgb(209, 213, 219);
}
.input-date-picker--done {
  border: 2px solid green;
}
</style>
