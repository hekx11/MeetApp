import { defineStore } from "pinia";
import { app, auth, db } from "../firestore/init";
import { collection, getDocs, addDoc } from "firebase/firestore";
import router from "@/router";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";

export const useFirestoreStore = defineStore("firestoredb", {
  state: () => ({
    user: {
      loggedIn: false,
      data: null as User | null,
    },
    //TODO add more profile data
    profileData: {
      name: "",
      email: "",
    },
  }),
  actions: {
    async getUserData({ user }: { user: User }) {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      const userExists = usersList.some(
        (userItem) => userItem.email === user.email
      );
      return userExists;
    },
    async registerStore(email: string, password: string, name: string) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response) {
        this.user.data = response.user;
        this.user.loggedIn = true;
        await updateProfile(response.user, {
          displayName: name,
        });
        await this.addUserToDb({ user: response.user });
        router.push("/");
      } else {
        throw new Error("registration failed");
      }
    },
    async logInStore(email: string, password: string) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response) {
        await this.addUserToDb({ user: response.user });
        this.user.data = response.user;
        this.user.loggedIn = true;
        router.push("/");
      } else {
        throw new Error("login failed");
      }
    },
    async logoutStore() {
      await signOut(auth);
      this.user.data = null;
      this.user.loggedIn = false;
      router.push("/login");
    },
    async addUserToDb({ user }: { user: User }) {
      const userExists = await this.getUserData({ user });
      const usersCollection = collection(db, "users");
      if (!userExists) {
        await addDoc(usersCollection, {
          email: user.email,
          name: user.displayName,
          uid: user.uid,
        });
      }
    },
  },
});
