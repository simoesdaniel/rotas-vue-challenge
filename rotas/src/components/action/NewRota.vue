<template>
  <v-row no-gutters>
    <v-date-picker
      v-model="date"
      :allowed-dates="allowedDates"
      min="2020-11-01"
      max="2020-11-30"
      @change="setDates"
    ></v-date-picker>
    <v-col class="">
      <h2 class="pb-4">Please fill both dates to create a new Rota</h2>
      <v-row class="ml-2 pa-4">
        <base-read-only-input
          label="Start Date"
          :data="startDate"
          @clear="clearStartDate"
        />
      </v-row>
      <v-row class="ml-2 pa-4">
        <base-read-only-input
          label="End Date"
          :data="endDate"
          @clear="clearEndDate"
        />
      </v-row>

      <v-row
        justify="end"
        align-content="space-between"
        align="end"
        class="pa-4 ml-2"
      >
        <v-btn color="error" @click="dismiss">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="submit">Submit</v-btn>
      </v-row>
    </v-col>

    <v-col cols="12" sm="6">
      <v-row justify="center">
        <v-col> </v-col>
        <v-col> </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "NewRota",
  emits: ["dismiss"],
  data: () => ({
    date: "2020-11-01",
    startDate: "DD-MM-YYYY",
    endDate: "DD-MM-YYYY",
  }),
  methods: {
    setDates(val) {
      if (this.startDate === "DD-MM-YYYY") {
        this.startDate = val;
      } else {
        this.endDate = val;
      }
    },
    clearStartDate() {
      this.startDate = "DD-MM-YYYY";
    },
    clearEndDate() {
      this.endDate = "DD-MM-YYYY";
    },
    allowedDates: (val) => {
      const date = new Date(val);

      return date.getDay() != 6 && date.getDay() != 0;
    },
    submit() {
      this.dismiss();
    },
    dismiss() {
      this.$emit("dismiss");
    },
  },
};
</script>

<style scoped>
.v-picker--date {
  border: 1px solid #333;
}
</style>
