
import Vue from 'vue'
import App from './App.vue'


import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store.js'
import vuetify from './plugins/vuetify';
import Vuetify from 'vuetify'
import vueRouter from 'vue-router'

import Messages from './components/Messages'
import NewMessage from './components/NewMessage'
import SingleMessage from './components/SingleMessage'

Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(vueRouter)

const routes =[
  { path: "/",component: Messages},
  { path: "/newmessages",component: NewMessage},
  { path: "/singlemessage/:id",component: SingleMessage},
]
const router = new vueRouter({routes, mode: 'history'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
