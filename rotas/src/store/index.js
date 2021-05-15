import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    displayView: "",
  },
  mutations: {
    displayView(state, displayView) {
      state.displayView = displayView;
    },
  },
  actions: {
    changeDisplayView({ commit }, displayView) {
      localStorage.setItem("displayType", displayView);
      commit("displayView", displayView);
    },
    setDefaultDisplayView({ commit }) {
      const displayView = localStorage.getItem("displayType");
      if (!displayView) {
        localStorage.setItem("displayType", "accordion");
      }
      displayView
        ? commit("displayView", displayView)
        : commit("displayView", "accordion");
    },
  },
  getters: {
    getDisplayView(state) {
      return state.displayView;
    },
  },
  modules: {},
});
