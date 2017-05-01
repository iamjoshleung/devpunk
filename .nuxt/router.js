'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _5de26009 = () => import('/Users/shunheileung/Documents/Web-Dev/devpunk/devpunk-front/pages/index.vue' /* webpackChunkName: "pages/index" */)

const _1d3a1f44 = () => import('/Users/shunheileung/Documents/Web-Dev/devpunk/devpunk-front/pages/pet-projects/index.vue' /* webpackChunkName: "pages/pet-projects" */)

const _1e2fa7f6 = () => import('/Users/shunheileung/Documents/Web-Dev/devpunk/devpunk-front/pages/client-projects/index.vue' /* webpackChunkName: "pages/client-projects" */)



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _5de26009,
			name: "index"
		},
		{
			path: "/pet-projects",
			component: _1d3a1f44,
			name: "pet-projects"
		},
		{
			path: "/client-projects",
			component: _1e2fa7f6,
			name: "client-projects"
		}
  ]
})
