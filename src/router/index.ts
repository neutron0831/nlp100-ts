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
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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
