import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Alumni from '@/view/Alumni.vue';
import DataScience from '@/view/DataScience.vue';
import FrontendWebDevelopment from '@/view/FrontendWebDevelopment.vue';
import FullstackWebDevelopment from '@/view/FullstackWebDevelopment.vue';
import ProductDesign from '@/view/ProductDesign.vue';
import MobileAppDevelopment from '@/view/MobileAppDevelopment.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/alumni',
      name: 'alumni',
      component: Alumni,
    },
    {
      path: '/data-science',
      name: 'data-science',
      component: DataScience,
    },
    {
      path: '/frontend-web-development',
      name: 'frontend-web-development',
      component: FrontendWebDevelopment,
    },
    {
      path: '/fullstack-web-development',
      name: 'fullstack-web-development',
      component: FullstackWebDevelopment,
    },
    {
      path: '/fullstack-web-development',
      name: 'fullstack-web-development',
      component: FullstackWebDevelopment,
    },
    {
      path: '/mobile-app-development',
      name: 'mobile-app-development',
      component: MobileAppDevelopment,
    },
    {
      path: '/product-design',
      name: 'product-design',
      component: ProductDesign,
    },
  ],
  scrollBehavior() {
    return { top: 0 }; 
  }
})

export default router
