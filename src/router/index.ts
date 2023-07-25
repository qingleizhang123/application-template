import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../Apps/Home.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: Home,
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});


export default router;
