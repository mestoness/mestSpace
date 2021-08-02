import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    post: [],
  },
  mutations: {
    post(state, data) {
      state.post = data;
    },
  },
  actions: {
    post(context, page) {
      setTimeout(function() {
        axios
        .get(
          `https://api.spaceflightnewsapi.net/v3/blogs?_limit=12&_start=${page +
            12}`
        )
        .then((response) => {
          context.commit("post", response.data);
        })
        .catch(() => {
          context.commit("post", []);
        });
      },500)
    },
  },
  getters: {
    getPost(state) {
      return state.post;
    },
  },
});
