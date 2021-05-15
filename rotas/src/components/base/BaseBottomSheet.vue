<template>
  <v-row>
    <v-col
      ><div class="text-center">
        <v-bottom-sheet v-model="sheet" inset>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="mx-2"
              fab
              dark
              color="indigo"
              absolute
              right
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </template>
          <v-sheet class="text-center" height="auto">
            <div class="pa-8">
              <new-rota @dismiss="sheet = !sheet" />
            </div>
          </v-sheet>
        </v-bottom-sheet></div
    ></v-col>
  </v-row>
</template>
<script>
import NewRota from "../action/NewRota.vue";
export default {
  components: { NewRota },
  name: "BaseBottomSheet",
  data: () => ({
    sheet: false,
  }),
};
</script>
