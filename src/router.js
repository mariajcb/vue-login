import Vue from 'vue'
import Router from 'vue-router'
import UserLogin from './components/UserLogin.vue'
import UserRegister from './components/UserRegister.vue'
const AuthPage = () => import('@/views/AuthPage')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: AuthPage
    },
    {
      path: '/login',
      component: UserLogin
    },
    {
      path: '/register',
      component: UserRegister
    },
  ]
})
