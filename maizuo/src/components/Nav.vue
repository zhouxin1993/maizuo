<template>
    <div id="nav" v-show="this.$store.state.showNav" @click="k">
      <div class="mask">
        <ul>
          <li v-for="item in navItems" @click.stop="went(item)">
            {{item.title}}
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
      data:function () {
        return{

          navItems:[
            {
              title:'首页',
              path:'/home'
            },
            {
              title:'影片',
              path:'/film'
            },
            {
              title:'影院',
              path:'/movie'
            },
            {
              title:'我的',
              path:'/mine'
            },
            {
              title:'卖座卡',
              path:'/card'
            }
          ]
        }
      },
      methods:{
          went(item){
            this.$router.push(item.path);
            this.$store.commit('changeShowNav');
          },
        k(){
            this.$parent.change();
        }
      }
    }
</script>

<style scoped>
  #nav{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    height: 100%;
    z-index: 999;
    padding-top: 50px;
  }
  .mask{
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  #nav ul{
    position: absolute;
    display: block;
    top: 0;
    right: 110px;
    bottom: 0;
    left: 0;
    background: #282828;
  }
  #nav ul li{

    width: 100%;
    display: block;
    color: #9a9a9a;
    font-size: 14px;
    line-height: 48px;
    text-indent: 8px;
    border-bottom: 1px dotted #333;
  }
</style>
