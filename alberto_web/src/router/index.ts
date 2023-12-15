import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home
  }

];


const router =  createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach( async (to) => {

  // const publicPages = ['/login', '/register-main', '/password-recovery', '/', '/register-users', '/register-restaurants', '/establecimientos'];
  // const authRequired = !publicPages.includes(to.path);
  // const auth = useAuthStore();
  // const expired = auth.isExpired();
  // console.log('expired', expired);
  // if (authRequired && (!auth.user || expired === false))  {
  //   //auth.returnUrl = to.fullPath;
  //   auth.logout();
  //   return '/login';
  // } else if (to.path === '/login' && auth.user != null && expired === true) {
  //   return '/my-profile';
  // }
}
);

export default router


/**
 * Notas:
 * - Al logear no funciona correctamente
 * - Algunos arreglos en el data devuelto en fethc-wrapper.ts
 * - En lo que devuelve data se podría guardar el token en el store
 */