<template>
  <v-row v-if="submitting">
    <v-col cols="12">
      <v-progress-circular :size="70" :width="7" color="primary" indeterminate>
      </v-progress-circular>
      <p>Wait while we terminate your request...</p>
    </v-col>
    <v-col
      ><v-btn class="mt-2" text color="error" @click="dismiss">
        close
      </v-btn></v-col
    >
  </v-row>
  <v-row v-else-if="submittionFailed">
    <new-rota-failed @dismiss="dismiss" @tryAgain="submit" />
  </v-row>
  <v-row v-else-if="submitted">
    <new-rota-success @dismiss="dismiss" />
  </v-row>
  <v-row v-else no-gutters>
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
      <v-row v-if="!requiredData">
        <v-col>
          <p class="red--text">Must select both dates</p>
        </v-col>
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
  </v-row>
</template>

<script>
import NewRotaFailed from "./NewRotaFailed.vue";
import NewRotaSuccess from "./NewRotaSuccess.vue";
export default {
  components: { NewRotaFailed, NewRotaSuccess },
  name: "NewRota",
  emits: ["dismiss"],
  data: () => ({
    date: "2020-11-01",
    startDate: "DD-MM-YYYY",
    endDate: "DD-MM-YYYY",
    submitting: false,
    submittionFailed: false,
    submitted: false,
    requiredData: true,
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
      if (this.startDate === "DD-MM-YYYY" && this.endDate === "DD-MM-YYYY") {
        this.requiredData = false;
      } else {
        this.submittionFailed = false;
        this.requiredData = true;
        this.submitting = true;
        this.actionText = "Wait while we terminate your request...";

        const payload = { startDate: this.startDate, endDate: this.endDate };

        const addRotaResponse = this.$store.dispatch(
          "rotas/generateNewRota",
          payload
        );

        addRotaResponse
          .then(({ data }) => {
            this.$store.dispatch("rotas/addRota", { ...data, payload });
          })
          .then(() => {
            this.submitting = false;
            this.submitted = true;
            setTimeout(() => {
              this.dismiss();
            }, 1500);
          })
          .catch((e) => {
            console.error(e);
            this.submittionFailed = true;
          });
      }
    },
    dismiss() {
      this.startDate = "DD-MM-YYYY";
      this.endDate = "DD-MM-YYYY";
      this.submitting = false;
      this.submittionFailed = false;
      this.submitted = false;
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
