// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import VueParticles from 'vue-particles'

import router from '@/router'
import store from '@/store'

import App from './App'

Vue.config.productionTip = false

// Init Element
Vue.use(ElementUI, { locale })

// Init particles
Vue.use(VueParticles)

// Sync vuex and vue-router
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
