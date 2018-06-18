<template>
  <div id="app">

    <div id="toolbar">
      <span class="span1" @click="change"><i class="fa fa-bars" aria-hidden="true"></i></span>
      <span class="span2">卖座电影</span>
    <div class="mid">
      <span class="span3">北京 v</span>
      <span class="span4"><i class="fa fa-user-o" aria-hidden="true"></i></span>
    </div>
    </div>
    <Nav></Nav>
    <router-view class="content"/>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default {
  name: 'App',
  components:{Nav},
  methods:{
    change(){
      this.$store.commit('changeShowNav');
    },

  },
  mounted(){
    // let url = 'http://localhost:3000/getList';
    // axios.get(url).then(function (data) {
    //   console.log(data)
    //   }).catch(function (err) {
    //   console.log('error')
    //   });
  },
 data:function(){
    return{
      title:"qqq"
    }
 }
 }

</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
#app {
  width: 100%;
  height: 100%;
  background: #ebebeb;
}
  .span1{
    float: left;
    width: 48px;
    text-align: center;
    border-right: 1px solid #222;
    box-shadow: 1px 0 1px #363636;
    color: #999;

  }
  .span2{
    padding: 0 1em;
    float: left;
    font-size: 14px;
    color: #efefef;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

  }
  .mid{
    float: right;
  }
  .span3{
    float: left;
    font-size: 16px;
    width: 48px;
    text-align: center;
    color: #999;
  }
  .span4{
    float: right;
    font-size: 16px;
    width: 48px;
    text-align: center;
    color: #999;
  }

  #toolbar {
    background: #282828;
    position: fixed;
    z-index: 500;
    top: 0;
    right: 0;
    left: 0;
    width: auto;
    height: 50px;
    line-height: 50px;
    overflow: hidden;
  }
  .content{
    padding-top: 50px;
  }
</style>
