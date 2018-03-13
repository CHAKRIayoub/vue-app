import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/auth/login'
import register from '@/components/auth/register'
import profile from '@/components/auth/profile'
import add from '@/components/users/add'
import edit from '@/components/users/edit'
import show from '@/components/users/show'
import users from '@/components/users/users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
    {
      path: '/show',
      name: 'show',
      component: show
    },
    {
      path: '/users',
      name: 'users',
      component: users
    }
  ],
  mode: 'history'
})
