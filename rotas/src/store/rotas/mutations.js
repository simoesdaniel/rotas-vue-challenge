export default {
  load(state, { shifts, availableShifts, availableRotas }) {
    state.shifts = shifts;
    state.availableShifts = availableShifts;
    state.availableRotas = availableRotas;
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
  addRota(state, { morning, afternoon }) {
    morning.forEach((el) => state.shifts.morning.push(el));
    afternoon.forEach((el) => state.shifts.afternoon.push(el));
  },
};
