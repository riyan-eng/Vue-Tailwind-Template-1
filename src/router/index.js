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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/text",
    component: () => import("../pages/Text.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/wallet",
    component: () => import("../pages/Wallet.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/crud",
    component: () => import("../pages/Crud.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    component: () => import("../pages/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
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
