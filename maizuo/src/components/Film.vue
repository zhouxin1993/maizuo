<template>
    <!--<div class="film">-->
      <!--<div class="spanCls1 film-tab-div">-->
        <!--<span class="autoFilm" @click="goPath('/nowPlaying')">正在上映</span>-->
        <!--<span class="autoFilm" @click="goPath('/comingSoon')">即将上映</span>-->
        <!--<div class="scroll_bar">-->

        <!--</div>-->
      <!--</div>-->
      <!--<router-view></router-view>-->
    <!--</div>-->
  <div id="film">
    <div class="clearfix film-tab-div">
      <span class="film-span" v-for="item,index in items" @click="goPath(item,index)">{{item.title}}</span>
      <div class="scroll_bar"   ref="scrollBar"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Film",
      methods: {
        goPath(item, index) {
          this.$refs.scrollBar.style.left = 50 * index + '%';
          this.$router.push(item.path);
        }
      },
        data(){
            return{
              items:[
                {
                  title:'正在上映',
                  path:'/nowPlaying'
                },
                {
                  title:'即将上映',
                  path:'/comingSoon'
                }
              ]
            }
        }

    }
</script>

<style scoped>
  .film-tab-div{
    margin: 0 15px;
    position: relative;

  }
  .scroll_bar{
    position: absolute;
    height: 0;
    border-top: 2px solid #fe6e00;
    width: 50%;
    top: 44px;
    left: 0;
    transition: 0.2s;
  }
  .film-span{
    float: left;
    width: 50%;
    height: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 46px;
    color: #6a6a6a;
    cursor: pointer;
  }
/*.film-tab-div{*/
  /*!*border-bottom: solid #fe6e00 1px;*!*/
  /*margin: 0 15px;*/
  /*position: relative;*/
/*}*/
  /*.autoFilm{*/
    /*float: left;*/
    /*width: 50%;*/
    /*height: 100%;*/
    /*text-align: center;*/
    /*font-size: 16px;*/
    /*line-height: 46px;*/
    /*color: #6a6a6a;*/
    /*cursor: pointer;*/
    /*border-bottom: solid #fe6e00 1px;*/
  /*}*/
  /*.scroll_bar{*/
     /*position: absolute;*/
    /*left: 0;*/
    /*top:44px;*/
    /*border: 1px solid #fe6e00;*/
    /*width: 50%;*/
  /*}*/
</style>
