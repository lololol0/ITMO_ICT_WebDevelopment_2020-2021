import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "../views/dashboard/Dashboard";
import MyAccount from "../views/dashboard/MyAccount";
import Detail from "../views/dashboard/Detail";
import SignUp from "../views/SignUp";
import LogIn from "../views/LogIn";

import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requireLogin: true
    }
    },
    {
      path: '/dashboard/:id',
      name: 'Detail',
      component: Detail,
       meta: {
      requireLogin: true
    }
    },
    {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }

  },
  //   {
  //   path: '/dashboard/clients',
  //   name: 'Clients',
  //   component: Clients,
  //   meta: {
  //     requireLogin: true
  //   }
  //
  // },    {
  //   path: '/dashboard/clients/:id',
  //   name: 'Client',
  //   component: Client,
  //   meta: {
  //     requireLogin: true
  //   }

  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
