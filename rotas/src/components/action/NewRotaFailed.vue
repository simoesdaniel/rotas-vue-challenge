<template>
  <div>
    <v-row>
      <v-col><v-icon x-large color="red">mdi-close-circle</v-icon></v-col>
    </v-row>
    <v-row>
      <v-col
        ><h3>
          Ups... Something went wrong. Please click the button below to try
          again or dismiss message.
        </h3></v-col
      >
    </v-row>
    <v-row>
      <v-col>
        <v-btn color="red" outlined @click="dismiss">Dismiss</v-btn>
        <v-btn color="primary" class="ml-4" @click="tryAgain">Try Again</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NewRotaFailed",
  emits: ["dismiss", "tryAgain"],
  methods: {
    dismiss() {
      this.$emit("dismiss");
    },
    tryAgain() {
      this.$emit("tryAgain");
    },
  },
};
</script>

<style></style>
