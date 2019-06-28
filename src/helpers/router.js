import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/views/HomePage'
import UserLogin from '@/components/UserLogin.vue'
import UserRegister from '@/components/UserRegister.vue'
const AuthPage = () => import('@/views/AuthPage')

Vue.use(Router)

export const router = new Router({
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
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})
