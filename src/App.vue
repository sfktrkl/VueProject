<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  components: {
    'add-blog': addBlog,
  },
  data () {
    return {

    }
  },
  methods: {

  },
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
