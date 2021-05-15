<template>
  <v-row no-gutters justify="center" class="mt-8">
    <v-expansion-panels popout>
      <v-expansion-panel v-for="(item, i) in 5" :key="i">
        <v-expansion-panel-header>
          <div>
            <span>Rota #ID</span>
            <v-chip color="primary" class="ml-4">
              <v-icon left>mdi-account-circle</v-icon>
              USER
            </v-chip>
            <v-chip
              :color="(i + 1) % 2 === 1 ? 'morning' : 'afternoon'"
              text-color="defaultText"
              class="ml-2"
            >
              <v-icon left>{{
                (i + 1) % 2 === 1 ? "mdi-brightness-5" : "mdi-brightness-4"
              }}</v-icon>
              {{ (i + 1) % 2 === 1 ? "Morning" : "Afternoon" }}
            </v-chip>
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row justify="start" align-content="start">
            <v-col>
              <div class="text-left">
                <span>
                  <v-icon>mdi-calendar</v-icon>
                  Rota date: DATE
                </span>
              </div>
              <div class="text-left">
                <span>
                  <v-icon>mdi-account-circle</v-icon>
                  User #ID: User full name
                </span>
              </div>
              <div class="text-left">
                <span>
                  <v-icon>{{
                    (i + 1) % 2 === 1 ? "mdi-brightness-5" : "mdi-brightness-4"
                  }}</v-icon>
                  {{ (i + 1) % 2 === 1 ? "Morning" : "Afternoon" }}
                </span>
              </div>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  name: "AccordionRotas",
};
</script>

<style></style>
