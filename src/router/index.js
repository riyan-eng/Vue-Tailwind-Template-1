import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/",
    component: () => import("../pages/Dashboard.vue"),
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
    path: "/data_table",
    component: () => import("../pages/DataTable.vue"),
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
