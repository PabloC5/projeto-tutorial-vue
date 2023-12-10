// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// main.js

import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Instalar o BootstrapVue
Vue.use(BootstrapVue)
// Opcionalmente, instalar o IconsPlugin
Vue.use(IconsPlugin)

// Se você precisar de ícones específicos do BootstrapVue, você pode importá-los individualmente.
// import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')
