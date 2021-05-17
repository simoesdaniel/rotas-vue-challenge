import axios from "axios";
export default {
  async loadRotas({ commit, dispatch }) {
    await axios
      .get("http://clava.io/api/rotas")
      .then(({ data }) => {
        const { rotas, users } = data;
        const shifts = { morning: [], afternoon: [] };
        const availableRotas = [];
        for (const key in rotas) {
          availableRotas.push(rotas[key].rotaID);
          rotas[key].rota.forEach((entry) => {
            if (entry.type === "morning") {
              shifts.morning.push(
                mapShifts(entry, rotas[key].rotaID, rotas[key].period, users)
              );
            } else {
              shifts.afternoon.push(
                mapShifts(entry, rotas[key].rotaID, rotas[key].period, users)
              );
            }
          });
        }
        const availableShifts = Object.keys(shifts);
        availableShifts.push("all");
        commit("load", { shifts, availableShifts, availableRotas });
      })
      .then(dispatch("loaded"))
      .catch((e) => console.error(e));
  },
  generateNewRota(payload) {
    return axios.post("http://clava.io/api/generate", payload);
  },
  async addRota({ commit, rootGetters, getters }, { rotaId }) {
    await axios
      .get("http://clava.io/api/rota/" + rotaId)
      .then(({ data }) => {
        const shifts = { morning: [], afternoon: [] };
        const { rota, rotaID, period } = data;

        const users = rootGetters["users/getAllUsers"];
        const availableRotas = getters.getAvailableRotas;

        if (!availableRotas.includes(rotaID)) {
          for (const key in rota) {
            if (rota[key].type == "morning") {
              shifts.morning.push(mapShifts(rota[key], rotaID, period, users));
            } else {
              shifts.afternoon.push(
                mapShifts(rota[key], rotaID, period, users)
              );
            }
          }
          commit("addRota", {
            morning: shifts.morning,
            afternoon: shifts.afternoon,
          });
        }
      })
      .catch((e) => console.log(e));
  },
  loaded({ commit }) {
    commit("setLoaded");
  },
  filteredUsers({ commit }, selectedUsers) {
    commit("setFilteredUsers", selectedUsers);
  },
  changeRota({ commit }, rotaId) {
    commit("changeSelectedRota", rotaId);
  },
  changeShift({ commit }, shift) {
    commit("changeSelectedShift", shift);
  },
};

function mapShifts(rota, rotaId, period, users) {
  return {
    ...rota,
    username: users.find((u) => u.userId === rota.userId).user,
    rotaId: rotaId,
    period: period,
  };
}
