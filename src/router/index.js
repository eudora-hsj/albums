import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
        path: "/", 
        name: 'Index',
        component: () => import("../views/Index.vue"),
    },
    {
        path: "/album", 
        name: 'Album',
        component: () => import("../views/Album.vue"),
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
});