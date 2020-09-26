<template>
  <div id="show-blogs" v-theme:column="'wide'">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <span id="blog-categories" v-for="category in blog.categories" :key="category">{{category}} </span>
      <article>{{blog.content}}</article>
      <p id="blog-type">{{blog.type}}</p>
  </div>
</template>

<script>
import mixin from '../mixins/mixin'

export default {
  data() {
    return {
      // id is what we need to detect from router
      id: this.$route.params.id,
      blog: { },
    }
  },
  mixins: [
    mixin,
  ],
  created(){
      this.$http.get('https://blog-ff35a.firebaseio.com/blogs/' + this.id + '.json').then(function(data){
        return data.json();
        this.blog = data.body;
      }).then(function(data){
        this.blog = data;
      });
  }
}
</script>

<!-- Import styles instead of repeating them in each component -->
<style src='../mixins/styles.css'>

</style>