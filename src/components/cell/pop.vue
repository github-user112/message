<template>
  <div class="pop" v-if="!isShow">
    <div class="container">
      <div class="title">请输入昵称</div>
      <input type="text" v-model="uname" required>
      <div class="btn">
        <button @click="submit">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        uname: '',
        isShow:1
      }
    },
    methods: {
      submit () {
        if(this.uname !== ''){
          this.$emit('uname', this.uname)
          localStorage.setItem('qqNickname',this.uname)
          this.isShow = 1;
        }
      },
    },
    watch: {},
    computed: {},
    created () {
      this.isShow = localStorage.getItem('qqNickname') || 0;
    },
    filters: {},
  }
</script>
<style lang="scss" scoped>
  .pop {
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    .container {
      padding: 10px;
      background: #fff;
      .title {
        padding: .2rem 0;
      }
      .btn {
        text-align: right;
        button {
          outline: 0;
          border: 0;
          background: green;
          color: #fff;
          padding: 5px;
          margin-top: 10px;
        }
      }
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

