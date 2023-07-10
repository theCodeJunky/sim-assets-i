import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({

  history : createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'simulate',
      component: () => import('../views/SimulateView.vue')
    },
    {
      path: '/mint',
      name: 'fmint',
      component: () => import('../views/MintView.vue')
    },
    {
      path: '/mintdetails/:id',
      name: 'mintdetails',
      component: () => import('../views/MintDetailsView.vue')
    }
  ]
})

export default router