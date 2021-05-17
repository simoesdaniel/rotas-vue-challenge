<template>
  <v-combobox
    v-model="select"
    :items="users"
    item-text="user"
    label="Filter by user"
    multiple
    chips
    @change="cbFilters"
  >
    <template v-slot:selection="data">
      <v-chip
        :key="JSON.stringify(data.item)"
        v-bind="data.attrs"
        :input-value="data.selected"
        :disabled="data.disabled"
        @click:close="data.parent.selectItem(data.item)"
      >
        <v-avatar
          class="accent white--text"
          left
          v-text="data.item.user.slice(0, 1).toUpperCase()"
        ></v-avatar>
        {{ data.item.user }}
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserFiltering",
  data: () => ({
    select: [],
    items: ["luis", "daniel"],
  }),
  computed: {
    ...mapGetters({
      users: "users/getAllUsers",
    }),
  },
  methods: {
    cbFilters(e) {
      this.$store.dispatch("rotas/filteredUsers", e);
    },
  },
};
</script>

<style></style>
