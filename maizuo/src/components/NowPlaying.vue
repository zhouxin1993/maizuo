<template>
    <div class="nowPlaying">
      <div class="now-auto" v-for="item in $store.state.nowPlayingItems">
        <img :src="item.cover.origin" class="alignLeft">
        <div class="left-movie">
          <div>
            <span class="span1">{{item.name }}</span>
            <span class="span2"><b>{{item.grade}}</b>></span>
          </div>
          <div>
            <span class="span3">{{item.scheduleCount}}</span>
            <span class="span4">{{item.watchCount}}</span>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "NowPlaying",
    mounted(){
          this.$store.dispatch('getNowPlaying')
    },
    }
</script>

<style scoped>
  .nowPlaying{
    padding-bottom: 40px ;
    width: 100%;
    box-sizing: border-box;
  }
  span{
    display: block;
  }
  *{
    padding: 0;
    margin: 0;
  }
  .left-movie{
    /*float: right;*/

  }
  .now-auto{
    width: 100%;
    box-sizing: border-box;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
    float: left;

  }
  .alignLeft{
    width: 30%;
    height: 50%;

  }
  b{
    font-size: 16px;
    color: #fc7103;
  }
  .span1{

  }
  .span4{

  }
</style>
