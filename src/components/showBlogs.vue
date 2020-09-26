<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" :key="blog" class="single-blog">
      <h2>{{blog.title}}</h2>
      <span id="blog-categories" v-for="category in blog.categories" :key="category">{{category}} </span>
      <article>{{blog.content}}</article>
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
