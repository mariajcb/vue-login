import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify';
import Vuelidate from 'vuelidate';
import router from "./router";
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuelidate);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
