<template>
  <v-container>
    <dashboard />
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Dashboard from "../components/Dashboard";

export default {
  name: "Home",

  components: {
    Dashboard,
  },
  computed: {
    ...mapGetters({
      loaded: "rotas/isLoaded",
    }),
  },
};
</script>
