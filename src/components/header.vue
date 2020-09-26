<template>
  <nav>
    <ul>
      <!-- Use router links to redirect to link -->
      <!-- It will add anchor tags with proper attributes -->
      <!-- Since path contains '/' it will also make this active
           use exact property to make exact matches active -->
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add Blogs</router-link></li>
      <li><router-link to="/list" exact>List Blogs</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
/* To show which page is active, it is defined by vue */
.router-link-active{
  background: #eee;
  color: #444;
}
</style>

