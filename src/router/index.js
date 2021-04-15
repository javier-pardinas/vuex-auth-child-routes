import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../routes';
//STORE:
import store from '../store';

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
//to: goes to, from: comes from, next: allow it to continue
router.beforeEach((to, from, next) => {
  //This tells us if the route needs authentication:
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  //check if the user is logged:
  const isLogged = store.state.auth.isLogged;

  //If it does not require authentication and the user is logged and they try to go to /login, take them back to /secret:
  if(!requiresAuth && isLogged && to.path === '/login') {
    next('/secret');
  } 
  //if it requires authentication but the user is NOT logged, then take them to /login:
  else if(requiresAuth && !isLogged) {
    next('/login');
  }
  //let them continue:
  else {
    next();
  }

})

export default router
