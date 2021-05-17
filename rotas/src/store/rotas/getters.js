export default {
  getShift(state) {
    // standard shift array
    let shift = state.shifts[state.selectedShift]
      ? state.shifts[state.selectedShift]
      : [];

    // if all shifts are selected  merge both shifts
    if (state.selectedShift === "all") {
      const allShifts = [];
      for (const key in state.shifts) {
        for (let i = 0; i < state.shifts[key].length; i++) {
          allShifts.push(state.shifts[key][i]);
        }
      }
      shift = allShifts;
    }

    // at the end check if it should filter by user and apply the filter
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
  getAvailableRotas(state) {
    return state.availableRotas;
  },
  isLoaded(state) {
    return state.loaded;
  },
};
