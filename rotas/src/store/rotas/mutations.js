export default {
  load(state, { shifts, availableShifts }) {
    state.shifts = shifts;
    state.availableShifts = availableShifts;
  },
  setLoaded(state) {
    state.loaded = true;
  },
  changeSelectedRota(state, rotaId) {
    state.selectedRota = rotaId;
  },
  changeSelectedShift(state, shift) {
    state.selectedShift = shift;
  },
  setFilteredUsers(state, users) {
    const userIds = users.map((u) => u.userId);
    state.selectedUsers = userIds;
  },
  addRota(state, payload) {
    payload.morning.forEach((el) => state.shifts.morning.push(el));
    payload.afternoon.forEach((el) => state.shifts.afternoon.push(el));
  },
};
