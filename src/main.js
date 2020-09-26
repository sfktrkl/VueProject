import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// Use that plugin to create http requests
Vue.use(VueResource);

// Custom directives
Vue.directive('rainbow', {
  // Use bind hook function it will be fired when directive is used
  bind(el, binding, vnode) {
    // el is the element itself
    // binding is the information about the bind, like its value
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') 
      el.style.maxWidth = "1200px";
    else if (binding.value == 'narrow') 
      el.style.maxWidth = "600px";

    if(binding.arg == "column")
    {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
