import axios from "axios";
export default {
  async loadUsers({ commit }) {
    await axios
      .get("http://clava.io/api/users")
      .then(({ data }) => {
        const { users } = data;
        commit("load", users);
      })
      .catch((e) => console.error(e));
  },
};
