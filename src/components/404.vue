<template>
  <div>
    <h1 v-rainbow>404 Page Not Found</h1>
  </div>
</template>

<script>
import mixin from '../mixins/mixin'

export default {
  data () {
    return {

    }
  },
  mixins: {
    mixin,
  }
}
</script>

<style>
h1 {
  text-align: center;
  margin: 0 auto;
}
</style>
