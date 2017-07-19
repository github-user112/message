<template>
  <div>
   me
  </div>
</template>

<script>
  import { TabContainer, TabContainerItem } from 'mint-ui';
  import { Tabbar, TabItem } from 'mint-ui';
  export default {
    components: {
      'mt-header':Tabbar,
      'mt-tab-item':TabItem
    },
    props:['title','icon','button'],
    data () {
      return {
        selected: '外卖'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

