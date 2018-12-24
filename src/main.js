import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import routes from './router/router'
import list from './pages/list'
import login from './components/login'

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    // routes,
    mode: 'history',
  routes: [
      { path: '/list', component: list },
      { path:"*", component: login}
  ]
})
new Vue({
  render: h => h(list),
    router
}).$mount('#app');

