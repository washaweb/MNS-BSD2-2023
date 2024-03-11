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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TodosView.vue')
    },
    {
      // ici on décrit une route qui contient un paramètre (param), avec le nom "id"
      path: '/todos/:id',
      props: true,
      name: 'todo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TodoView.vue')
    },

    // Une route globale qui match une expression régulière
    // à placer en dernier, car elle s'execute uniquement si aucune autre route n'a été trouvée dans le tableau du router
    {
      path: '/:pathMatch(.*)*',
      name: 'not found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
