<template>
  <div>
    <mInput></mInput>
    <mChoice></mChoice>
    <div class="group">
      <template v-for="item in list">
        <mGroup :item="item"></mGroup>
      </template>
    </div>

  </div>
</template>

<script>
  import mInput from './cell/input.vue'
  import mChoice from './cell/choice.vue'
  import mGroup from './cell/group.vue'

  export default {
    components: {
      mInput,
      mChoice,
      mGroup
    },
    data () {
      return {
        list: [
          {
            title: '朋友',
            line: '10',
            all: '20',
            groupDetail:[
              {
                src:'1.jpg',
                name:'小明'
              }, {
                src:'1.jpg',
                name:'小明'
              }, {
                src:'1.jpg',
                name:'小明'
              },
            ]
          }, {
            title: '朋友1',
            line: '10',
            all: '20',
            groupDetail:[
              {
                src:'1.jpg',
                name:'小明'
              },
            ]
          }, {
            title: '朋友2',
            line: '10',
            all: '20',
            groupDetail:[
              {
                src:'1.jpg',
                name:'小明'
              },
            ]
          }, {
            title: '朋友3',
            line: '10',
            all: '20',
            groupDetail:[
              {
                src:'1.jpg',
                name:'小明'
              },
            ]
          }
        ]
      }
    },
    methods: {
      incrementTotal: function (title) {
        console.log(title);
        this.title = title;
      }
    }
  }
</script>
<style scoped>
  .group {
    border-bottom: 1px solid #ddd;
  }

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

