import { createRouter, createWebHistory } from "vue-router";
import { auth } from "../firestore/init";
import { useFirestoreStore } from "../stores/fireStoreDB";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  const store = useFirestoreStore();
  if (to.name !== "login" && store.$state.user.data?.email === undefined) {
    return { name: "login" };
  }
});

export default router;
