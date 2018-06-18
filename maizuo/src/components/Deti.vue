<template>
    <div class="deti" v-if="items">
      <img :src="items.cover.origin">
      <h1 class="jieshao">影片简介</h1>
      <div class="box">
        <div>
          <span>导演：</span>
          <span>{{(items.director)}}</span>
        </div>
        <div>
          <span>主演：</span>
          <span>{{items.actors}}</span>
        </div>
        <div>
          <span>地区语言：</span>
          <span>{{items.nation}}{{items.language}}</span>
        </div>
        <div>
          <span>类型：</span>
          <span>{{items.category}}</span>
        </div>
        <div>
          <span>上映时间</span>
          <span>5月18日上映</span>
        </div>
        <div class="bot">
          <span>{{items.synopsis}}</span>
        </div>
      </div>
      <div class="fix">
        <button>
          立即购票
        </button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Deti",
      mounted(){
        this.$store.commit('BBB',this.$route.params.id)
        this.$store.dispatch('getDeti');
        setTimeout(()=>{
          //console.log(this.$store.state.detiData)
          this.items = this.$store.state.detiData
        },1000)

      },
      data(){
          return{
            items:''
          }
      },

      updated(){
        this.$store.dispatch('getDeti');
        setTimeout(()=>{
          console.log(this.$store.state.detiData)
          this.items = this.$store.state.detiData
        },5000)
      }
    }
</script>

<style scoped>
  h1,h2{
    font-weight:normal;
  }
ul{
  list-style: none;
}
  li{
    display:inline-block;
    margin: 0 10px;
  }
  a{
    color: #42b983;
  }
  .jieshao{
    margin: 16px auto;
    border-left: 16px solid RGB(228, 200, 156);
    font-size: 16px;
    padding-left: 4px;
  }
  .deti img{
    width: 100%;
    transition: all 1.2s ease;
    opacity: 1;
  }
  .deti .box{
    padding:20px
  }
  .box div{
    line-height: 30px;
    font-size: 16px;
  }
  .bot{
    margin-bottom: 80px;
  }
  .fix{
    position: fixed;
    left: 0;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }
  button{
    font-size: 14px;
    min-width: 156px;
    height: 36px;
    line-height: 36px;
    border: none;
    background-color: #fe8233;
    padding: 0;
    border-radius: 18px;
    color: #fff;
    -webkit-transition: 0.5s ease;
    margin: 0 auto 15px;
  }
</style>
