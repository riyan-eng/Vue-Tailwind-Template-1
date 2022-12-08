import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

const routes = [
  {
    path: "/login",
    component: () => import("../pages/Login.vue"),
    name: "Login",
  },
  {
    path: "/",
    component: () => import("../pages/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
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

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.user.isLogin) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
