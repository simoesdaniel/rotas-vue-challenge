<template>
  <v-app>
    <the-navigation></the-navigation>
    <v-main>
      <router-view />
    </v-main>
    <base-bottom-sheet />
  </v-app>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
export default {
  components: { TheNavigation },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
