<template>
  <div>
    <pop v-on:uname="receive"></pop>
    <mt-header fixed :title="title">
      <router-link to="/msg" slot="left">
        <mt-button icon="back">消息(6)</mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="scrollContainer" :style="{'height':mHeight}">
      <div class="msgContainer" id="scroll">
        <template v-for="item in msgList">
          <div class="time">{{item.addTime | formaTime("yyyy-MM-dd HH:mm:ss")}}</div>
          <div :class="item.who==nickname?'me':'other'">
            <div class="textContainer">
              <div class="uname" v-if="item.who!=nickname">{{item.who}}</div>
              <div class="content">
                {{item.message}}
              </div>
            </div>
            <div class="head-img">
              <img src="../assets/TIM.png" alt="">
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="sendMsg">
      <div class="sendText">
        <!--<div contenteditable @blur="msgValue = $event.target.innerHTML"></div>-->
        <textarea v-model="msgValue" rows="1"></textarea>
        <mt-button size="small" @click="sendMsg">发送</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Header } from 'mint-ui'
  import axios from 'axios'
  import pop from './cell/pop.vue'

  export default {
    components: {
      mtHeader: Header,
      Pop: pop,
    },
    data () {
      return {
        nickname: '',
        uname: null,
        msgValue: '',
        socket: '',
        msgList: null,
      }
    },
    methods: {
      receive (name) {
        this.nickname =name;
      },
      sendMsg () {
        let newmsg = {'who': this.nickname, message: this.msgValue, addTime: new Date()}
        this.msgList.push(newmsg)
        this.msgValue = ''
        this.socket.emit('sendMsg', newmsg)
      },
    },
    watch: {
      msgList () {
        this.$nextTick(() => {
          let ele = document.getElementsByClassName('scrollContainer')[0]
          ele.scrollTop = ele.scrollHeight
        })
      },
    },
    computed: {
      mHeight () {
        return parseFloat(document.documentElement.clientHeight) - 40 + 'px'
      },
      title () {
        return this.$route.query.title
      },
    },
    created () {
      this.nickname = localStorage.getItem('qqNickname')
      axios.post('/message', {
        firstName: 'Fred',
        lastName: 'Flintstone',
      }).then((response) => {
        this.uname = response.data.pop()
        this.msgList = response.data.reverse()
      }).catch(function (error) {
        console.log(error)
      })
      this.socket = io.connect('http://123.206.56.48:80')
      this.socket.on('newMsg', (data) => {
        console.log(data)
        this.msgList = this.msgList.concat(data)
        console.log(this.msgList)
      })
    },
    filters: {
      formaTime: function (value) {
        var date = new Date(value)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' +
          date.getMinutes() + ':' + date.getSeconds()
      },
    },
  }
</script>
<style lang="scss" scoped>
  .time {
    font-size: 14px;
    color: #666;
    text-align: center;
    padding: 10px 0;
  }

  .scrollContainer {
    padding-bottom: 35px;
    box-sizing: border-box;
    overflow: auto;
  }

  .msgContainer {
    /* padding-bottom: 1rem;
     height: 100%;*/
  }

  .me {
    .textContainer {
      text-align: right;
      margin-right: .3rem;
      .content {
        color: #fff;
        background-color: rgb(38, 131, 245);
        &:after {
          position: absolute;
          right: -.15rem;
          top: .2rem;
          content: url(../assets/arrow-right.png);
        }
      }
    }
  }

  .other {
    flex-direction: row-reverse;
    .textContainer {
      margin-left: .3rem;
      .content {
        background-color: rgb(238, 238, 238);
        &:after {
          position: absolute;
          left: -.15rem;
          top: .2rem;
          content: url(../assets/arrow-left.png);
        }
      }

    }
  }

  .me, .other {
    display: flex;
    justify-content: flex-end;
    padding: .2rem;
    .textContainer {
      flex: 1;
      .content {
        text-align: left;
        display: inline-block;
        min-width: .5rem;
        min-height: .5rem;
        padding: .2rem;
        position: relative;
        border-radius: .2rem;
      }
    }
    .head-img {
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
      overflow: hidden;
    }
    .uname {
      font-size: 14px;
      color: rgb(128, 128, 128);
      margin-top: -8px;
      margin-bottom: 5px;
    }
  }

  .sendMsg {
    background: #fff;
    position: fixed;
    bottom: 0;
    padding: 0 .2rem;
    width: 100%;
    box-sizing: border-box;
  }

  .sendText {
    display: flex;
    align-items: flex-end;
    textarea {
      flex: 3;
      outline: 0;
      resize: none;
      line-height: .53rem;
    }
    button {
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

