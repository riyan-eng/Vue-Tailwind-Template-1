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
      breadcrumb:[
        {name: 'Dashboard'}
      ]
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
      breadcrumb: [{ name: "Profile" }],
    },
  },
  {
    path: "/easy_data_table",
    component: () => import("../pages/VueEasyDataTable.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/access",
    component: () => import("../pages/Access.vue"),
    meta: {
      requiresAuth: true,
      breadcrumb: [{ name: "Access" }],
    },
  },
  {
    path: "/permission",
    component: () => import("../pages/Permission.vue"),
    meta: {
      requiresAuth: true,
      breadcrumb:[
        {name: 'Permission'}
      ]
    },
  },
  {
    path: "/role",
    component: () => import("../pages/Role.vue"),
    meta: {
      requiresAuth: true,
      breadcrumb:[
        {name: 'Role'}
      ]
    },
  },
  {
    path: "/permission_access",
    component: () => import("../pages/PermissionAccess.vue"),
    meta: {
      requiresAuth: true,
      breadcrumb:[
        {name: 'Permission Access'}
      ]
    },
  },
  {
    path: "/role_permission",
    component: () => import("../pages/RolePermission.vue"),
    meta: {
      requiresAuth: true,
      breadcrumb:[
        {name: 'Role Permission'}
      ]
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
