import Vue from 'vue'
import App from './App.vue'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'

Vue.component('header-component', Header)
Vue.component('footer-component', Footer)

new Vue({
  el: '#app',
  render: h => h(App)
})
