<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  $font-size:52.083;
  body{
    margin:0;
    font-size: 16rem/$font-size;
  }
  a{
    text-decoration: none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 40px;
}
  .clearfix:after{
    content: '';
    display: block;
    clear:both;
    overflow: hidden;
  }
</style>
