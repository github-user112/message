<template>
  <div>
    <mtHeader :title="title.title" :icon="title.icon" :button="title.button"></mtHeader>
    <router-view></router-view>
    <mtTabbar  v-on:increment="incrementTotal"></mtTabbar>
  </div>
</template>

<script>
  import mtHeader from './cell/header'
  import mtTabbar from './cell/tabbar'
  export default {
    components: {
      mtHeader,
      mtTabbar,
    },
    data () {
      return {
        title:{
          title:'联系人',
          icon:'',
          button:'添加'
        }
      }
    },
    methods:{
      incrementTotal:function (title) {
        console.log(title);
        this.title = title;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

