import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: "/register",
        component: () => import("@/views/user/Register.vue")
    },
    {
        path: "/login",
        component: () => import("@/views/user/Register.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;