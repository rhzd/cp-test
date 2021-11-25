import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    loading: false
  },
  mutations: {
    SET_ARTICLE_DATA(state, data) {
      state.articles = data;
    },
    SET_LOADING(state, data) {
      state.loading = data;
    }
  },
  actions: {
    getArticles({ commit }) {
      commit("SET_LOADING", true);
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => {
          commit("SET_ARTICLE_DATA", response.data);
          commit("SET_LOADING", false);
        });
    },
  },
  getters: {
    allArticles: (state) => state.articles,
    isLoading: (state) => state.loading,
  },
  modules: {},
});
