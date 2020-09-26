import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

// Use that plugin to create http requests
Vue.use(VueResource);

// When directives and filters registered globally, they can
// be used in all apllication. Since, some these directives
// and filters may not be needed in all components, they should
// be registered locally.

// Custom directives
Vue.directive('rainbow', {
  // Use bind hook function it will be fired when directive is used
  bind(el, binding, vnode) {
    // el is the element itself
    // binding is the information about the bind, like its value
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

// Filters
Vue.filter('to-uppercase', function(value) {
  // value refers to data which filter is assigned.
  return value.toUpperCase();
});

// Use that plugin to set up routes
Vue.use(VueRouter);

// Import routes (they are seperated to keep files organized)
import Routes from './routes'

// Create an instance of the router and define the routes
const router = new VueRouter({
  routes: Routes,
  // When we go to a route it creates a request to the server.
  // and erver will return appropriate result from.
  // # does not create a request to the server,
  // it just taking us to a different part of the page
  // Instead of using #, we should use history mode to avoid this behaviour.
  // When using history mode, index file in the server is getting back to us
  // and vue decides to show which component has to be shown.
  mode: 'history',
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
