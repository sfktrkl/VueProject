<template>
  <!-- All data types can be passed as a value to the custom directive -->
  <!-- Arguments can also be passed to custom directives -->
  <div id="show-blogs" v-theme:column="'wide'">
    <h1>All Blog Articles</h1>
    <input id="search" type="text" v-model="search" placeholder="Search" />
    <!-- Use filtered blogs instead of blogs, so blogs which contains
    // the searched value will be shown only. -->
    <div v-for="blog in filteredBlogs" :key="blog" class="single-blog">
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

<!-- Import styles instead of repeating them in each component -->
<style src='../mixins/styles.css'>

</style>
