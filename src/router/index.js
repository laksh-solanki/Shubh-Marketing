import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/Catlogue',
      name: 'catlogue',
      component: () => import('../views/Cotlogueview.vue'),
      meta: { title: 'Catlogue' },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contact' },
    },
    {
      path: '/Tile',
      name: 'Tile',
      component: () => import('../views/Tile.vue'),
      meta: { title: 'Tile' },
    },
  ],
})

router.afterEach((to, from) => {
  document.title = to.meta.title || 'Shubh Marketing App'
  window.scrollTo(0, 0)
})

export default router
