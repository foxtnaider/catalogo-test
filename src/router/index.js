import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalogs/:company_id',
      name: 'CatalogView',
      params: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CatalogView.vue')
    },
    {
      path: '/catalogs/products/:catalog_name/:catalog_id',
      name: 'ProductsByCatalogsView',
      params: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsByCatalogsView.vue')
    },
    {
      path: '/products/detail/:product_name/:product_id',
      name: 'ProducDetailView',
      params: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProducDetailView.vue')
    },
  ]
})

export default router
