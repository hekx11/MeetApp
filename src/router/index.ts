import { createRouter, createWebHistory } from "vue-router";
import { useStoreAuth } from "@/stores/storeAuth";
import { useStoreEvents } from "@/stores/storeEvents";

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

router.beforeEach(async (to) => {
  const storeAuth = useStoreAuth();
  const storeEvents = useStoreEvents();
  await storeAuth.init();
  await storeEvents.init();

  if (storeAuth.user) {
    console.log("signed in");
    return;
  } else if (!storeAuth.user && to.name !== "login") {
    console.log("not signed in");
    return { name: "login" };
  }
});

export default router;
