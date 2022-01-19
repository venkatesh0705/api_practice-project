import axios from "axios";
import { createStore } from "vuex";
// import axios from "axios";
export default createStore({
  state: {
    data: [],
  },
  mutations: {
    //single user
    ADD_USER(state, payload) {
      state.data.push(payload);
    },

    // add all users
    ADD_USERS: (state, allData) => {
      state.data = allData;
    },
  },
  getters: {
    ALL_USERS: (state) => {
      return state.data;
    },
  },
  actions: {
    // insert api
    async fetchData({ commit }) {
      const response = await axios.get(
        "https://61a085036c3b400017e69900.mockapi.io/sampleData"
      );

      commit("ADD_USERS", response.data);
    },

    // add single users

    async add_user({ commit }, userData) {
      const response = await axios.post(
        "https://61a085036c3b400017e69900.mockapi.io/sampleData",
        userData
      );

      commit("ADD_USER", response.data);
    },
    // add_user({ commit }, payload) {
    //   commit("ADD_USER", response.data );
    // },
  },
});
