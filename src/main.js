// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './wrouter'
import store from './wStore'
// import router from './router'
// import store from './store'
import messageBox from './plugins/messageBox'

Vue.config.productionTip = false

Vue.use(messageBox)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
