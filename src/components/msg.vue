<template>
  <div>
    <mInput></mInput>
    <div class="msgList" v-for="item in msgList">
      <mMsgList :data=item></mMsgList>
    </div>
  </div>

</template>

<script>
  import mInput from './cell/input.vue'
  import mMsgList from './cell/msgList.vue'
  export default {
    components: {
      mInput,
      mMsgList
    },
    data() {
      return {
        msgList:[
          {
            img:'../../assets/TIM.png',
            name:'聊天室1',
            lastMsg:'三方协议',
            lastTime:'2017-12-6'
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
