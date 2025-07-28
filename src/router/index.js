import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import Alumni from '@/view/Alumni.vue';
import PresentCohort from '@/view/PresentCohort.vue';
import DataScience from '@/view/DataScience.vue';
import FrontendWebDevelopment from '@/view/FrontendWebDevelopment.vue';
import FullstackWebDevelopment from '@/view/FullstackWebDevelopment.vue';
import ProductGraphicDesign from '@/view/ProductGraphicDesign.vue';
import MobileAppDevelopment from '@/view/MobileAppDevelopment.vue'
import ReactjsNextjs from '@/view/ReactjsNextjs.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/courses',
      name: 'Courses',
      // component: OurService,
      children: [
        {
          path: 'data-science',
          name: 'DataScience',
          component: DataScience
        },
        {
          path: 'frontend-web-development',
          name: 'frontendWebDevelopment',
          component: FrontendWebDevelopment,
        },
        {
          path: 'reactjs-nextjs',
          name: 'ReactjsNextjs',
          component: ReactjsNextjs,
        },
        {
          path: 'fullstack-web-development',
          name: 'FullstackWebDevelopment',
          component: FullstackWebDevelopment,
        },
        {
          path: 'mobile-app-development',
          name: 'MobileAppDevelopment',
          component: MobileAppDevelopment,
        },
        {
          path: 'product-graphic-design',
          name: 'ProductGraphicDesign',
          component: ProductGraphicDesign,
        },
      ]
     },    
    {
      path: '/our-students',
      name: 'OurStudents',
      // component: OurService,
      children: [
        {
          path: 'alumni',
          name: 'Alumni',
          component: Alumni,
        },
        {
          path: 'present-cohort',
          name: 'PresentCohort',
          component: PresentCohort,
        },
      ]
     },    
  ],
  scrollBehavior() {
    return { top: 0 }; 
  }
})

export default router
