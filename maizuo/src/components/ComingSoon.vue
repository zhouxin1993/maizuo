<template>
    <div class="comingSoon" ref="willHot">
        <div class="comeSoon-film clearfix" v-for="item in $store.state.comingSoonItems">
          <img  :src="item.cover.origin" class="ig">
          <div class="alignLeft">
            <div>
              <span>{{item.name }}</span>
              <span><b>{{item.grade}}</b>></span>
            </div>
            <div>
              <span>{{item.scheduleCount}}</span>
              <span>{{item.watchCount}}</span>
            </div>
          </div>
        </div>

    </div>
 </template>

<script>
    export default {
        name: "ComingSoon",
        mounted(){
          this.$store.dispatch('getComingPlaying')
        },
    }
</script>

<style scoped>
  .comingSoon{
    padding-bottom: 40px ;
  }
  .comeSoon-film{
    width: 100%;
    border-bottom: dashed 1px #c9c9c9;
    cursor: pointer;
  }
  .ig{
    width: 30%;
    height: 40%;

  }
  .alignLeft{
    float: right;
    width: 50%;
  }
  b{
    font-size: 16px;
    color: #fc7103;
  }
</style>
