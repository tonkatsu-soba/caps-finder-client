import Vue from 'vue';
import axios from 'axios';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_ROOT,
  timeout: 1000,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
