import { onAuthStateChanged } from "firebase/auth";
import { defineStore } from "pinia";
import { auth } from "../firestore/init";
import { toRefs } from "vue";
import { useFirestoreStore } from "@/stores/fireStoreDB";

export const useStoreAuth = defineStore("storeAuth", () => {
  const state = {
    user: null as any,
  };
  const storeFirestore = useFirestoreStore();
  const init = () => {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          state.user = {};
          state.user.name = firebaseUser.displayName;
          console.log(state.user.name)
          state.user.id = firebaseUser.uid;
          state.user.email = firebaseUser.email;
          storeFirestore.setUser(state.user);
          //console.log('logged in:',state.user);
        } else {
          state.user = null;
          //console.log('logged out');
        }
        resolve(state.user);
      });
    });
  };
  return {
    ...toRefs(state), // To expose reactive properties
    init,
  };
});
