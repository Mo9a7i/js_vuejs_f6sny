import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import vueHeadful from "vue-headful";
import "./assets/css/main.scss";
import router from "./router";

Vue.component("vue-headful", vueHeadful);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
