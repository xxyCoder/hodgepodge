import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/register",
        component: () => import("@/views/user/Register.vue")
    },
    {
        path: "/login",
        component: () => import("@/views/user/Login.vue")
    },
    {
        path: "/",
        component: Home
    },
    {
        path: "/article",
        component: () => import("@/views/article/Index.vue"),
        children: [
            {
                path: "concern",
                component: () => import("@/views/article/Concern.vue")
            },
            {
                path: "",
                component: () => import("@/views/article/Recent.vue")
            }
        ]
    },
    {
        path: "/video",
        component: () => import("@/views/video/Index.vue"),
        children: [
            {
                path: "concern",
                component: () => import("@/views/video/Concern.vue")
            },
            {
                path: "",
                component: () => import("@/views/video/Recent.vue")
            }
        ]
    },
    {
        path: '/discuss',
        component: () => import("@/views/discuss/Index.vue"),
        children: [
            {
                path: "concern",
                component: () => import("@/views/discuss/Concern.vue")
            },
            {
                path: "",
                component: () => import("@/views/discuss/Recent.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;