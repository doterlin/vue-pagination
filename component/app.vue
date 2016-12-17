//App.vue 
//这是父组件示例
//author: lhq
//2016-11-30

<template>
  <div id="app">
    <h1 class="title" v-text="msg"></h1>
     <pagination :totalPage="parentTotalPage" :currentPage="parentCurrentpage" :changeCallback="parentCallback"></pagination>
  </div>
</template>

<script>
//引入pagination组件
import pagination from './pagination.vue';

export default {
  name: 'app',
  data () {
    return {
      msg : "Update your data here.",
      //在data中初始化总页数totalPage，和当前页currentPage
      parentTotalPage: 100,
      parentCurrentpage: 1
    }
  },
  //使用pagination组件
  components: { pagination },
  methods:{
    //在这里传入pagination的跳转页码回调方法
    //cpage是已跳转的当前页码
    parentCallback( cPage )  {
      //这里是页码变化后要做的事
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
