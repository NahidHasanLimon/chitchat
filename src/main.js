import Vue from 'vue'
import App from './App.vue'


import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store.js'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify'
import vueRouter from 'vue-router'
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
