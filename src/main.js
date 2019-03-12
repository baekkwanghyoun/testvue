import Vue from 'vue'
import VeeValidate from 'vee-validate';

import './plugins/vuetify'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

Vue.config.productionTip = false
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
