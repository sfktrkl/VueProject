<template>
  <!-- All data types can be passed as a value to the custom directive -->
  <!-- Arguments can also be passed to custom directives -->
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" :key="blog" class="single-blog">
      <!-- Use a custom directive to change color of the header -->
      <!-- Use filters to change outputs. Filters will not change the data,
           they will only change the display of the output.  -->
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <span id="blog-categories" v-for="category in blog.categories" :key="category">{{category}} </span>
      <article>{{blog.content | snippet}}</article>
      <p id="blog-type">{{blog.type}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      blogs: [],
    }
  },
  methods: {

  },
  created() {
    this.$http.get('http://localhost:3000/blogs').then(function(data){
      // Do not show all the data, just show first 10
      this.blogs = data.body.slice(0, 10);
    });
  }
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 2px;
  margin: 20px;
  box-sizing: border-box;
  background: rgb(180, 180, 180);
}
h2, article{
  margin: 20px;
}
#blog-type, #blog-categories{
  color: rgb(88, 84, 84);
  margin: 20px;
  text-align: right;
}
</style>
