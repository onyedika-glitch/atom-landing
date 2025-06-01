// src/router/index.ts (or .js)
import { createRouter, createWebHistory } from 'vue-router';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Services from '../components/Services.vue';
import Contact from '../components/Contact.vue';

const routes = [
    { path: '/', name: 'Hero', component: Hero },
    { path: '/about', name: 'About', component: About },
    { path: '/services', name: 'Services', component: Services },
    { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
