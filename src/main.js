import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

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


new Vue({
  el: '#app',
  render: h => h(App)
})
