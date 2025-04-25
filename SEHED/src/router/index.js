import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import WhatView from '@/views/WhatWeDo.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/what-we-do',
      name: 'what-we-do',
      component: WhatView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ],
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

export default router
