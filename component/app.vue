//App.vue 
//测试其他组件用的文件，可随意更改
//使用webpack编译后可在../web/vw-test/index.html查看效果
//author: lhq
//2016-11-30

<template>
  <div id="app">
    <!-- <img src="./images/logo.png"> -->
    <h1 class="title" v-text="msg"></h1>
     <pagination :totalPage="parentTotalPage" :currentPage="parentCurrentpage" :changeCallback="parentCallback"></pagination>
  </div>
</template>

<script>
import pagination from './pagination.vue';

export default {
  name: 'app',
  data () {
    return {
      msg : "Update your data here.",
      parentTotalPage: 100,
      parentCurrentpage: 1
    }
  },
  //使用组件
  components: { pagination },
  methods:{
    parentCallback( cPage )  {
      this.msg = 'Update your data here. Page: ' + cPage;
    }
  }
}
</script>

<style>
body,html{margin:0;padding:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  margin: 200px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
</style>
