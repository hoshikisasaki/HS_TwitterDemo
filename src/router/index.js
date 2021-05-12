import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Sighup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'
import Detail from '../views/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/detail:id',
    name:'Detail',
    component:Detail,
    props:true,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/signup',
    name:'signup',
    component:Sighup
  },
  {
    path:'/',
    name:'login',
    component:Login
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
