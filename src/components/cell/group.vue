<template>
  <div class="friend-group">
    <div class="title" :class="{open:isopen}" @click="changeOpen">
      <i class="fa fa-caret-down"></i>
      <span class="group-name">{{item.title}}</span>
      <span class="number">{{item.line}}/{{item.all}}</span>
    </div>
    <ul class="detail">
      <li v-for="v in item.groupDetail">
        <div class="head-img">
          <img src="v.src" alt="">
        </div>
        <div>
          {{v.name}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    components: {},
    data () {
      return {
        isopen:false
      }
    },
    props:['item'],
    methods: {
      changeOpen:function () {
        this.isopen = !this.isopen;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .title {
    text-align:center;
    &:after {
      display: block;
      content: '';
      clear: both;
    }
    border-top: 1px solid #ddd;
    padding: .15rem;
    .fa {
      width: .7rem;
      font-size: 21px;
      transform: rotate(-90deg);
      transition: .05s;
    }
    > :not(.number) {
      float: left;
      height: .4rem;
      line-height: .4rem;
    }
    .number {
      float: right;
      padding-right: .1rem;
    }
  }
  ul{
    padding:0;
    margin:0;
    list-style: none;
    display: none;
    li{
      border-top:1px solid #ddd;
      height:.4rem;
      line-height:.4rem;
      padding: .15rem;
    }
  }
  .open .fa{
    transform: rotate(0);
  }
  .open+ul{
    display: block;
  }
  .head-img,.head-img+div{
    float: left;
    padding-left:.3rem;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
