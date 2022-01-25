import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Login from "./views/Login.vue";
import Projects from "./views/ProjectsList.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
