import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Signup from '@/views/Signup'
import Dashboard from '@/views/Dashboard'
import Estimate from '@/views/Estimate'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      beforeEnter: guardRoute,
      component: Dashboard
    },
    {
      path: '/estimate/:id',
      name: 'Estimate',
      beforeEnter: guardRoute,
      component: Estimate
    }
  ]
})

function guardRoute (to, from, next) {
  // work-around to get to the Vuex store (as of Vue 2.0)
  const auth = router.app.$options.store.state.auth

  if (!auth.isLoggedIn) {
    next({
      name: 'Login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default router