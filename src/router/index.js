import { createRouter, createWebHashHistory } from 'vue-router'




const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: () => import(/* webpackChunkName: "about" */ '../views/AcceuilView.vue')
  },
  {
    path: '/Presentation',
    name: 'Presentation',
    component: () => import(/* webpackChunkName: "about" */ '../views/PresentationView.vue')
  },
  {
    path: '/PrestationTarifs',
    name: 'PrestationTarifs',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/PrestationTarifsView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  } /*,

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/AboutView.vue')
  } */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
