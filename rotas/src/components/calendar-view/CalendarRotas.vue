<template>
  <v-row class="mt-8">
    <v-col>
      <v-sheet height="500">
        <v-calendar :now="today" :value="today" color="primary">
          <template v-slot:day="{ date }">
            <v-row class="fill-height">
              <template>
                <v-sheet
                  v-for="(percent, i) in tracked[date]"
                  :key="i"
                  :title="category[i]"
                  :color="colors[i]"
                  :width="`${percent}%`"
                  height="100%"
                  tile
                ></v-sheet>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "CalendarRotas",
  data: () => ({
    today: "2020-11-01",
    tracked: {
      "2020-11-09": [23, 45, 10],
      "2020-11-08": [10],
      "2020-11-07": [0, 78, 5],
      "2020-11-06": [0, 0, 50],
      "2020-11-05": [0, 10, 23],
      "2020-11-04": [2, 90],
      "2020-11-03": [10, 32],
      "2020-11-02": [80, 10, 10],
      "2020-11-01": [20, 25, 10],
    },
    colors: ["#1867c0", "#fb8c00", "#000000"],
    category: ["Development", "Meetings", "Slacking"],
  }),
};
</script>

<style></style>
