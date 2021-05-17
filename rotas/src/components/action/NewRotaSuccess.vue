<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col
          ><v-icon x-large color="green"
            >mdi-checkbox-marked-circle</v-icon
          ></v-col
        >
      </v-row>
      <v-row>
        <v-col><h3>A new rota was added.</h3></v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="green" outlined @click="dismiss">Dismiss</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NewRotaSuccess",
  emits: ["dismiss"],
  methods: {
    dismiss() {
      this.$emit("dismiss");
    },
  },
};
</script>

<style></style>
