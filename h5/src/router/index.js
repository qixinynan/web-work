import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '@/views/Detail/DetailView.vue'
import ProfileView from '@/views/Profile/ProfileView.vue'
import ShareView from '@/views/ShareView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/share',
      name: 'share',
      component: ShareView
    }
  ],
})

export default router
