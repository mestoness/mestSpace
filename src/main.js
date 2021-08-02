import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { VueMasonryPlugin } from "vue-masonry";
import VueSmoothScroll from "vue2-smooth-scroll";
Vue.use(VueSmoothScroll, {
  duration: 600,
  updateHistory: false,
});
Vue.use(VueMasonryPlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
