/* eslint-disable */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Index from '@/pages/login/Index.vue'
const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: Index
    }
] //This Array for storing all routers
const router = createRouter(
    {
        history: createWebHashHistory(), //This Router is hash mode
        routes: routes
    })
export default router
