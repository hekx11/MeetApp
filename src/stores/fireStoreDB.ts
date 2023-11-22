import router from "@/router";
import { GeoPoint, addDoc, collection, getDocs } from "firebase/firestore";
import { defineStore } from "pinia";
import { auth, db } from "../firestore/init";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { useStoreAuth } from "@/stores/storeAuth";
import { useStoreEvents } from "./storeEvents";
export const useFirestoreStore = defineStore("firestoredb", {
  state: () => ({
    constEventIndexes: [] as string[],
    user: {
      data: null as any,
    },
    //TODO add more profile data
    profileData: {},
    eventsList: [] as any[],
    eventsLocations: [] as any[],
    currentLocation: null as any,
  }),
  actions: {
    async getCurrentLocation() {
      const success = (position: any) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.currentLocation = { lat: latitude, lng:longitude };
        console.log(this.currentLocation)
      };
      const error = (err: any) => {
        console.error(err);
      };
      navigator.geolocation.getCurrentPosition(success, error);
    },
    setIds(ids: any) {
      this.constEventIndexes = ids;
    },
    getIndex(str: string) {
      return this.constEventIndexes.indexOf(str);
    },
    async setUser(user: any) {
      this.user.data = user;
    },
    async getUserData({ user }: { user: User }) {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => doc.data());
      const userExists = usersList.some(
        (userItem) => userItem.email === user.email
      );
      return userExists;
    },
    async initEvents() {
      const eventsStore = useStoreEvents();
      await eventsStore.init();
    },
    getEventsList() {
      return this.eventsList;
    },    
    async setEventsList(eventsList: any = null) {
      this.eventsList = eventsList;
      this.constEventIndexes.forEach((eventId, index) => {
        eventsList[index].id = eventId;
      });
    },
    async initLocations() {
      const eventsList = this.getEventsList();
      const locations = eventsList.map((item: any) => ({
        lat: item.location.latitude,
        lng: item.location.longitude,
      }));
      this.eventsLocations = locations;
    },
    async getLocations() {
      await this.initLocations();
      return this.eventsLocations;
    },
    async registerStore(email: string, password: string, name: string) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storeAuth = useStoreAuth();
      if (response) {
        this.user.data = response.user;
        await updateProfile(response.user, {
          displayName: name,
        });
        console.log(name);
        await this.addUserToDb({ user: response.user });
        router.push("/");
      } else {
        throw new Error("registration failed");
      }
    },
    async logInStore(email: string, password: string) {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const storeAuth = useStoreAuth();
      if (response) {
        await this.addUserToDb({ user: response.user });
        this.user.data = response.user;
        router.push("/");
      } else {
        throw new Error("login failed");
      }
    },
    async logoutStore() {
      await signOut(auth);
      this.user.data = null;
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
    async addEventToDb(event: any) {
      const eventsCollection = collection(db, "events");
      await addDoc(eventsCollection, {
        name: event.name,
        description: event.description,
        location: new GeoPoint(event.location.lat, event.location.lng),
        date: event.date,
        creator: this.user.data?.uid,
      });
    },
  },
});
