import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/app.scss";
//import Navbar from "./components/layout/Navbar.vue";
//import HeaderInfos from "./components/HeaderInfos.vue";
Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

//app.component("Navbar", Navbar);
//app.component("header-infos", HeaderInfos);
