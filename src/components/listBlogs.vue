<template>
  <!-- All data types can be passed as a value to the custom directive -->
  <!-- Arguments can also be passed to custom directives -->
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>List Blog Titles</h1>
    <input id="search" type="text" v-model="search" placeholder="Search" />
    <!-- Use filtered blogs instead of blogs, so blogs which contains
    // the searched value will be shown only. -->
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
      <!-- Use a custom directive to change color of the header -->
      <!-- Use filters to change outputs. Filters will not change the data,
           they will only change the display of the output.  -->
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
    </div>
  </div>
</template>

<script>
import mixin from '../mixins/mixin'

export default {
  components: {
  },
  data () {
    return {
      blogs: [],
      search: '',
    }
  },
  mixins: [
    mixin,
  ],
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
#search{
  width: 1180px;
}
</style>
