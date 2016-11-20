import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'

import {routes} from './routes'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'

Vue.use(VueRouter);
const router = new VueRouter({routes, mode: 'history'});

Vue.use(VueResource);
Vue.http.options.root = 'https://eduardo-saavedra.firebaseio.com/users.json';

Vue.component('header-component', Header);
Vue.component('footer-component', Footer);

export const eventBus = new  Vue();

new Vue({
  el: '#app',
	router,
  render: h => h(App)
});

