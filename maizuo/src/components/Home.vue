<template>
  <div class="home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in items">
          <img :src="item.imgSrc" class="swImg">
        </div>
      </div>
    </div>
    <ul class="showUl">
      <li class="showLi" v-for="item in $store.state.showItems"  @click ="goMovi(item.id)">
        <Show :showData="item"></Show>
      </li>
    </ul>
    <button class="more-button" @click = "goDetail('/film')">
      更多热映电影
    </button>
    <div class="cut-line">
      <div class="cut-content">
        即将上映
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import Show from './Show'
  export default {
    name: 'Home',
    components:{  Show },
    methods:{
      goDetail(path){
        this.$router.push(path)
      },
      goMovi(id){
        this.$store.commit('AAA',id)
        this.$router.push({path:'/deti/'+id})
      }
    },
    mounted(){
      // console.log(Swiper);
      // this.$nextTick(function () {
      new Swiper('.swiper-container', {
        autoplay: true,
        speed: 500
      });
      // console.log(this.$store);
      this.$store.dispatch('getFilms');
      // let self = this;
      // let url = 'http://localhost:3000/getList';
      // this.$http.get(url).then(function (data) {
      //   console.log(data.data.data.films);
      //   self.showItems = [...data.data.data.films];
      //   //console.log('aa',data.data.data.films);
      // }).catch(function (err) {
      //   console.log('error')
      // });
      // })
    },
    data () {
      return {
        items:[
          {
            title: 'img1',
            imgSrc: 'https://pic.maizuo.com/h5PicUpload/047a494c2c37ad1ffef262b50ae5746c.jpg'
          },
          {
            title: 'img2',
            imgSrc: 'https://pic.maizuo.com/h5PicUpload/062a965ab71db31fe0b7ad6f8c529935.jpg'
          },
          {
            title: 'img3',
            imgSrc: 'https://pic.maizuo.com/usr/movie/7acf605568d4525236d89b7bc82a4f99.jpg'
          }
        ],
      }
    }
  }
</script>

<style scoped>
  .swImg{
    width: 100%;
    height: 180px;
  }
  .showUl{
    padding: 18px;
  }
  .showLi{
    width: 100%;
    margin-bottom: 18px;
  }
  .more-button{
    display: block;
    width: 160px;
    height: 30px;
    border: 1px solid #aaa;
    border-radius: 15px;
    margin: 10px auto 30px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: #616161;
    cursor: pointer;
  }
  .cut-line{
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid #a8a8a8;
  }
  .cut-content{
    width: 65px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: -10px;
    border-radius: 5px;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #eee;
    background-color: #a7a7a7;
  }
</style>
