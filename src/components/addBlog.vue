<template>
  <div>
    <div id="add-blog">
      <h2>Add a New Blog Post</h2>
      <!-- Use submitted property to hide form when post is submitted -->
      <form v-if="!submitted">
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
        <label>Blog Type:</label>
        <!-- Attach v-model to select tag itself -->
        <select v-model="blog.type">
            <!-- Cycle through options for blog types -->
            <!-- Whichever option we select, select tag will get its value of that option -->
            <option v-for="type in blogTypes" :key="type">{{type}}</option>
        </select>
      <div id="submit">
        <!-- Use prevent modifier to prevent its default behaviour -->
        <button id="submit-button" @click.prevent="post">Add Blog</button>
      </div>
      </form>
      <h3 id="submit-text" v-if="submitted">Thanks for adding your post.</h3>
      <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">{{category}}</li>
        </ul>
        <p>Blog Type: {{blog.type}}</p>
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
            type: '',
        },
        blogTypes: [
            'Public',
            'Private'
        ],
        submitted: false,
    }
  },
  methods: {
    post: function () {
        this.$http.post('http://localhost:3000/blogs', {
            title: this.blog.title,
            content: this.blog.content,
            categories: this.blog.categories,
            type: this.blog.type,
            // Since this returns a promise use then()
            // (it takes time to complete this action)
        }).then(function(data){
          this.submitted = true;
        });
    }
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
select{
    display: inline-block;
    vertical-align: middle;
    margin-top: 10px;
}
#submit{
  text-align: center;
}
#submit-button{
  background-color: blue;
  border: none;
  color: white;
  padding: 10px 12px;
  display: inline-block;
}
#submit-button:hover{
  background-color: green;
}
#submit-text{
  text-align: center;
  color: green;
}
</style>
