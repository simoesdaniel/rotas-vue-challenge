import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      shifts: {},
      availableShifts: [],
      availableRotas: [],
      selectedShift: "morning",
      selectedUsers: [],
      loaded: false,
    };
  },
  getters,
  mutations,
  actions,
};
