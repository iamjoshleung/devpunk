import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PetProjects from '@/components/PetProjects'
import ClientProjects from '@/components/ClientProjects'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pet-projects',
      name: 'PetProjects',
      component: PetProjects
    },
    {
      path: '/client-projects',
      name: 'ClientProjects',
      component: ClientProjects
    },
    {
      path: '*', 
      component: NotFoundComponent
    }
  ]
})
