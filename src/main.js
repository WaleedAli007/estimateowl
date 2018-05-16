// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'
import Auth from './services/auth'
import store from './store'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Auth)
Vue.use(VueResource)
Vue.use(Vuelidate)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
