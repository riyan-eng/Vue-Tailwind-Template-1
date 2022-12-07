import { createRouter, createWebHistory } from "vue-router";
import PrivateLayout from "../components/layout/PrivateLayout.vue"

const routes = [
  {
    path: "/login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/",
    component: () => import("../pages/Dashboard.vue"),
    meta: { layout: PrivateLayout }
  },
  {
    path: "/table",
    component: () => import("../pages/Table.vue"),
  },
  {
    path: "/text",
    component: () => import("../pages/Text.vue"),
  },
  {
    path: "/wallet",
    component: () => import("../pages/Wallet.vue"),
  },
  {
    path: "/crud",
    component: () => import("../pages/Crud.vue"),
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
