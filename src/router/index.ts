import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: {
          title: 'NLP 100 Exercise in TypeScript',
          description: 'NLP 100 Exercise 2020 (Rev 2) in TypeScript',
        },
      },
      {
        path: '/chapter:chapter([1-9]|10)',
        name: 'Chapter',
        component: () =>
          import(/* webpackChunkName: "chapter" */ '@/views/Chapter.vue'),
        sensitive: true,
        strict: true,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () =>
          import(/* webpackChunkName: "notFound" */ '@/views/NotFound.vue'),
        meta: {
          title: '404 Not Found',
          description: 'The page you were looking for does not exist.',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  document.title = String(to.meta.title)
  const description: HTMLMetaElement = document.querySelector(
    'meta[name="description"]',
  )!
  description.content = String(to.meta.description)
})

export default router
