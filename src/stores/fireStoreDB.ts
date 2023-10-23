import { defineStore } from "pinia";
import { auth } from "../firestore/init";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";

export const useFirestoreStore = defineStore("firestoredb", {
  state: () => ({
    user: {
      loggedIn: false,
      data: null as User | null,
    },
  }),
  actions: {
    async registerStore(email: string, password: string, name: string) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        this.user.data = response.user;
        this.user.loggedIn = true;
      } else {
        throw new Error("registration failed");
      }
    },
    async logInStore(email: string, password: string) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        this.user.data = response.user;
        this.user.loggedIn = true;
      } else {
        throw new Error("login failed");
      }
    },
    async logoutStore() {
      await signOut(auth);
      this.user.data = null;
      this.user.loggedIn = false;
    },
  },
});
