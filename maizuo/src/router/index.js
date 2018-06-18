import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Film from '../components/Film'
import Deti from '../components/Deti'
import NowPlaying from '../components/NowPlaying'
import ComingSoon from '../components/ComingSoon'



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/film',
      name:'Film',
      component:Film,
      children:[
        {
          path:'/nowPlaying',
          name:'NowPlaying',
          component:NowPlaying
        },
        {
          path:'/comingSoon',
          name:'ComingSoon',
          component:ComingSoon
        }
      ]
    },
    {
      path:'/deti/:id',
      name:'Deti',
      component:Deti
    }
  ]
})
