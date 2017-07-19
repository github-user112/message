<template>
  <div class="choice-container">
    <div class="newFriend">
      <i class="fa fa-weixin"></i>
      <p>新朋友</p>
    </div>
    <div class="group">
      <i class="fa fa-qq"></i>
      <p>群聊</p>
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
  .choice-container{
    display: flex;
    text-align:center;
    padding:0 .5rem;
    >div{
      flex:1;
      padding:0.3rem .3rem 0;
      i{
        font-size:.5rem;
      }
      p{
        margin-top: .15rem;
      }
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
