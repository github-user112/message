<template>
    <div class="search-container">
      <input type="text" class="search">
      <div class="text">
        <i class="fa fa-search"></i>
        <span>搜索</span>
      </div>
    </div>
</template>

<script>

  export default {
    components: {

    },
    data () {
      return {

      }
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
  $font-size:52.083;
  .search-container{
    margin:10rem/$font-size 10rem/$font-size 0;
    position: relative;
    .text{
      font-size: 12rem/$font-size;
      position: absolute;
      left:50%;
      top:50%;
      transform: translate(-50%,-50%);
    }
  }
  .search{
    border:none;
    background: #ddd;
    border-radius: .1rem;
    width:100%;
    outline:0;
    height: 20rem/$font-size;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

