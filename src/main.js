import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Use that plugin to create http requests
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
