<template>
    <mt-header fixed :title="title">
      <mt-button :icon="icon" slot="right">{{button}}</mt-button>
    </mt-header>
</template>

<script>
  import {Header} from 'mint-ui'
  export default {
    components: {
      'mt-header':Header,
    },
    props:['title','icon','button'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

