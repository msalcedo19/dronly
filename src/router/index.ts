import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: () => import('../views/ProductDetailsView.vue')
    },
    {
      path: '/lists',
      name: 'lists',
      component: () => import('../views/ListsView.vue')
    },
    {
      path: '/search-results',
      name: 'search-results',
      component: () => import('../views/SearchResultsView.vue')
    },
    {
      path: '/product-compare/:id',
      name: 'product-compare',
      component: () => import('../views/ProductCompareView.vue')
    },
    {
      path: '/list/:id',
      name: 'list-detail',
      component: () => import('../views/ListDetailView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router 