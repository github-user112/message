<template>
  <div class="tabbar">

    <div :class="{active:isactive=='msg'}" @click="toggle('msg')">
      <i class="fa fa-weixin"></i>
    </div>
    <div :class="{active:isactive=='people'}" @click="toggle('people')">
      <i class="fa fa-qq"></i>
    </div>
    <div :class="{active:isactive=='me'}" @click="toggle('me')">
      <i class="fa fa-window-restore"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isactive: 'msg'
      }
    },
    methods: {
      toggle(string){
        this.$router.push(string);
        this.isactive = string;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tabbar {
    position: fixed;
    bottom: 0;
    height: .8rem;
    display: flex;
    width: 100%;
    border-top: 1px solid #ddd;
    > * {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fa {
      font-size: .5rem;
      color: red;
    }
    .active .fa {
      color: #000;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

