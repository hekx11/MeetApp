import { useStoreAuth } from "@/stores/storeAuth";
import { useStoreEvents } from "@/stores/storeEvents";
import { useFirestoreStore } from "@/stores/fireStoreDB";
import { createRouter, createWebHistory } from "vue-router";

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
      path: "/profile/",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
      children: [
        {
          path: "info",
          name: "profile-info",
          component: () => import("../components/profile/ProfileInfo.vue"),
        },
        {
          path: "settings",
          name: "profile-settings",
          component: () => import("../components/profile/ProfileSettings.vue"),
        },
      ],
    },
  ],
});

router.beforeEach(async (to) => {
  const storeAuth = useStoreAuth();
  const storeEvents = useStoreEvents();
  const storeFirestore = useFirestoreStore();
  await storeAuth.init();
  await storeEvents.init();

  if (storeFirestore.user!= null) {
    console.log(storeFirestore.user)
    return;
  } else if (!storeFirestore.user && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
