import Vue from "vue";
import App from "./App.vue";
import VeeValidate from 'vee-validate';
import BootstrapVue from "bootstrap-vue";

import { store } from "./store"
import { router } from "./helpers/router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(VeeValidate);
Vue.config.productionTip = false;

import { configureFakeBackend } from './helpers';
configureFakeBackend();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
