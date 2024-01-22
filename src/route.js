// route.js
import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/projects',
      name: 'projects',
      component: AppProjects, // Assicurati che il nome del componente sia corretto
    },
    {
      path: '/projects/:slug',
      name: 'project',
      component: SingleProject,
    },
  ],
});

export default router;