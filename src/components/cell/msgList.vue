<template>
  <router-link :to="{name:'wechat',query:{title:data.name}}">
    <div class="msg-container">
      <div class="head-img">
        <img src="../../assets/TIM.png" alt="">
      </div>
      <div class="detail">
        <div class="msg-name">
          <h4>{{data.name}}</h4>
          <span class="time">{{data.lastTime}}</span>
        </div>
        <div class="last-msg">
          {{data.lastMsg}}
        </div>
      </div>
    </div>
  </router-link>

</template>

<script>

  export default {
    components: {},
    data () {
      return {}
    },
    props:['data'],
    methods: {}
  }
</script>
<style lang="scss" scoped>
  $font-size: 52.083;
  h4{
    margin:0;
  }
  .msg-container{
    padding:0 10rem/$font-size;
    margin-top: 15rem/$font-size;
    display: flex;
  }
  .detail{
     margin-left:.2rem;
    flex:1;
     display: flex;
      flex-direction: column;
   }
 .head-img{
   float:left;
   width:.8rem;
   height:.8rem;
   border-radius:50%;
   overflow: hidden;
 }
  .msg-name{
    display: flex;
    justify-content: space-between;
  }
  .last-msg{

  }
  .time{
    font-size:14px;
    color:#333;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

