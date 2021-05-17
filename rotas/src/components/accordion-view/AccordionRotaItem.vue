<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div>
        <span>Rota #{{ shift.rotaId }}</span>
        <v-chip small color="primary" class="ml-4">
          <v-icon left>mdi-account-circle</v-icon>
          {{ shift.username }}
        </v-chip>
        <v-chip small color="light-grey" text-color="defaultText" class="ml-2">
          <v-icon left>mdi-calendar</v-icon>
          @{{ shift.date }}
        </v-chip>
      </div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row justify="start" align-content="start">
        <v-col>
          <div class="text-left">
            <span>
              <v-icon>mdi-calendar</v-icon>
              Shift date: {{ shift.date }}
            </span>
          </div>
          <div class="text-left">
            <span>
              <v-icon>mdi-account-circle</v-icon>
              User #{{ shift.userId }}: {{ shift.username }}
            </span>
          </div>
          <div class="text-left">
            <span>
              <v-icon left>{{
                shift.type === "morning"
                  ? "mdi-brightness-5"
                  : "mdi-brightness-4"
              }}</v-icon>
              {{ shift.type }}
            </span>
          </div>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "AccordionRotaItem",
  props: {
    shift: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
