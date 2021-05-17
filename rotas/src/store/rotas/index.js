import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      shifts: {},
      availableShifts: [],
      selectedShift: "morning",
      selectedUsers: [],
      loaded: false,
    };
  },
  getters,
  mutations,
  actions,
};
