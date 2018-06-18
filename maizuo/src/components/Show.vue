<template>
<div class="show">
  <img :src="showData.cover.origin" class="show-img">
  <div class="show-word">
    <div >
      <p>{{showData.name}}</p>
      <div>
        <span>{{showData.cinemaCount}}</span>
        <span>家影院上映</span>
        <span>{{showData.watchCount}}</span>
        <span>人购票</span>
      </div>
    </div>
    <div class="show-bot">
      {{showData.grade}}
    </div>
  </div>
  <router-view>
  </router-view>
</div>
</template>

<script>

  export default {
    name: 'Show',
    mounted(){
      //console.log(this.showData)
    },
    props:['showData'],
    data () {
        return {

        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .show {
    height: 200px;
    background: white;
    border-radius: 3px;
  }
  .show-img{
    width: 100%;
    height: 160px;
    background: none;
  }
  .show-word{
    display: flex;
    justify-content: space-around;
    color: lightgray;
  }
  .show-word p{
    color: black;
  }
  .show-bot{
    line-height: 40px;
    color: orangered;
    font-size: 18px;
  }
</style>
