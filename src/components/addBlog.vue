<template>
  <div>
    <div id="add-blog">
      <h2>Add a New Blog Post</h2>
      <form>
        <label>Blog Title:</label>
        <!-- Whatever we store in this input will be stored in title -->
        <input type="text" v-model.lazy="blog.title" required />
        <label>Blog Content:</label>
        <!-- v-model syncs data after each input event, lazy modifier
             is used to sync after change events. Hence, preview will
             only be refreshed when input loses its focus. -->
        <textarea v-model.lazy="blog.content"></textarea>
        <label>Blog Cagetories:</label>
        <div id="checkboxes">
            <p>Technology</p>
            <!-- Use an array to add the value of the chekbox -->
            <input type="checkbox" value="Technology" v-model="blog.categories" />
            <p>Lifestyle</p>
            <input type="checkbox" value="Lifestyle" v-model="blog.categories" />
            <p>Health</p>
            <input type="checkbox" value="Health" v-model="blog.categories" />
            <p>Education</p>
            <input type="checkbox" value="Education" v-model="blog.categories" />
        </div>
      </form>
      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">{{category}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blog: {
            title: '',
            content: '',
            categories: [],
        },
    }
  },
  methods: {

  },
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#chekcboxes{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes p{
    display: inline-block;
}
label {
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
}
</style>

