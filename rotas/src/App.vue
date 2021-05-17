<template>
  <v-app>
    <the-navigation></the-navigation>
    <v-main>
      <v-col v-if="!isLoaded">
        <v-progress-circular
          :size="70"
          :width="7"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-col>
      <router-view v-else />
    </v-main>
    <base-bottom-sheet />
  </v-app>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
import { mapGetters } from "vuex";
export default {
  components: { TheNavigation },
  name: "App",
  computed: {
    ...mapGetters({ isLoaded: "rotas/isLoaded" }),
  },
  created() {
    this.$store.dispatch("setDefaultDisplayView");
    this.$store.dispatch("users/loadUsers");
    this.$store.dispatch("rotas/loadRotas");
  },
};
</script>
