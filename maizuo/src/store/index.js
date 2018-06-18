import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default  new Vuex.Store({
  state:{
    isShow: true,
    showItems: [],
    detiData:"",
    aid:'',
    showNav:false,
    nowPlayingPage:0,
    comingPlayingPage:0,
    nowPlayingItems: [],
    comingSoonItems:[]
  },
  actions:{
    getFilms({commit,state}){
      return new Promise(function (req,rej) {
        let temp = new Date().getTime();
        let url = '/sexLady/v4/api/film/now-playing?__t='+temp+'&page=1&count=5';
        axios.get(url).then(function (data) {
          state.showItems = [...data.data.data.films];
          //console.log('aa',data.data.data.films);
          //console.log(data)
        }).catch(function (err) {
          console.log('error')
        });
      })
    },
    getDeti({commit,state}){
      let temp = new Date().getTime();
      let url = '/sexLady/v4/api/film/'+state.aid+'?__t='+temp;
      axios.get(url).then(function (data) {

        state.detiData = data.data.data.film
        //state.detiData = [...data.data.data.film];
        //console.log(state.detiData)
      })
    },
    getNowPlaying({commit,state},page){
      state.nowPlayingPage ++;
      let url = '/sexLady/v4/api/film/now-playing?page='+state.nowPlayingPage+'&count=7';
      axios.get(url).then(function (data) {
        //console.log(data);
        state.nowPlayingItems = state.nowPlayingItems.concat(data.data.data.films);
        //console.log(state.nowPlayingItems);
      });
    },
    getComingPlaying({commit,state},page){
      state.comingPlayingPage ++;
      //https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
      //https://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
      let url = '/sexLady/v4/api/film/coming-soon?page='+state.comingPlayingPage+'&count=7';
      axios.get(url).then(function (data) {
        console.log(data);
        state.comingSoonItems = state.comingSoonItems.concat(data.data.data.films);
        console.log(state.comingSoonItems);
      });
    },
  },
  mutations:{

    AAA(state,id){
      state.aid = id
    },
    BBB(state,id){
      state.aid = id
    },
    changeShowNav(state){
      state.showNav = !state.showNav;
    }
  }
})
