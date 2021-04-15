export default [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      //beforeEnter: (to, from, next) => {} (you could do the same thing for each route)
    },
    {
      path: '/secret',
      component: () => import('./views/Secret/Secret.vue'),
      meta: {
        requiresAuth: true
      },
      children: [
        {
          path: 'notes',
          component: () => import('./views/Secret/Notes.vue')
        }
      ]
    }
]