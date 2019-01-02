// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  render: h => h(App),
    router: router
}).$mount('#app');
