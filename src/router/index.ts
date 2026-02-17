import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/home',
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('../views/CaseView.vue'),
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/Portfolio.vue'),
    },
  ],
})

export default router
