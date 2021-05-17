<template>
  <div>
    <v-sheet height="600">
      <v-spacer></v-spacer>
      <v-calendar
        ref="calendar"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlap-threshold="30"
        event-text-color="defaultText"
        :event-height="35"
        @change="getEvents"
      >
        <template v-slot:event="{ event }">
          <div>
            <v-icon color="defaultText" small>{{
              getEventIcon(event.shift)
            }}</v-icon>
            {{ event.name }}
            <br />
            {{ event.username }}
          </div>
        </template>
      </v-calendar>

      <v-spacer></v-spacer>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "CalendarRotas",
  props: ["shifts"],
  data: () => ({
    type: "month",
    types: ["month", "week", "day", "4day"],
    mode: "stack",
    modes: ["stack", "column"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
      { text: "Mon - Fri", value: [1, 2, 3, 4, 5] },
      { text: "Mon, Wed, Fri", value: [1, 3, 5] },
    ],
    value: "",
    events: [],
  }),
  watch: {
    shifts: function (shifts) {
      this.events = shifts.map((s) => ({
        name: "Rota #" + s.rotaId,
        username: s.username,
        shift: s.type,
        start: new Date(s.date),
        end: new Date(s.date),
        color: s.type,
        timed: false,
      }));
    },
  },
  methods: {
    getEvents({ start, end }) {
      start.date = "2020-11-01";
      end.date = "2020-11-30";
      this.events = this.shifts.map((s) => ({
        name: "Rota #" + s.rotaId,
        username: s.username,
        shift: s.type,
        start: new Date(s.date),
        end: new Date(s.date),
        color: s.type,
        timed: false,
      }));
    },
    getEventIcon(type) {
      return type === "morning" ? "mdi-brightness-5" : "mdi-brightness-4";
    },
  },
};
</script>

<style></style>
