export default {
  getShift(state) {
    let shift = state.shifts[state.selectedShift]
      ? state.shifts[state.selectedShift]
      : [];
    if (state.selectedShift === "all") {
      const allShifts = [];
      for (const key in state.shifts) {
        for (let i = 0; i < state.shifts[key].length; i++) {
          allShifts.push(state.shifts[key][i]);
        }
      }
      shift = allShifts;
    }
    if (state.selectedUsers && state.selectedUsers.length > 0) {
      shift = shift.filter((r) => state.selectedUsers.includes(r.userId));
    }
    return shift;
  },

  getSelectedShift(state) {
    return state.selectedShift;
  },
  getAvailableShifts(state) {
    return state.availableShifts;
  },
  isLoaded(state) {
    return state.loaded;
  },
};
