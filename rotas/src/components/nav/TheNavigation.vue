<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <h1>Rotas Dashboard</h1>
    </div>
    <v-spacer></v-spacer>
    <v-switch
      v-model="switch1"
      :label="`Dark mode: ${switch1 ? 'On' : 'Off'}`"
      @click="switchToDarkMode"
    ></v-switch>
    <v-btn
      href="https://github.com/simoesdaniel/rotas-vue-challenge/tree/main/rotas"
      target="_blank"
      text
    >
      <span class="mr-2">Project Files</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheNavigation",
  data: () => ({
    mode: "Light",
    switch1: false,
  }),
  methods: {
    switchToDarkMode() {
      this.$vuetify.theme.dark = this.switch1;
    },
  },
};
</script>
