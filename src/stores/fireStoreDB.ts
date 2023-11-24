import router from "@/router";
import { GeoPoint, addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
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
      displayName: null as any,
      uid: null as any,
      email: null as any,
    },
    //TODO add more profile data
    profileData: {},
    eventsList: [] as any[],
    eventsLocations: [] as any[],
    currentLocation: null as any,
  }),
  actions: {
    async setUserLocation(location: any) {
      this.currentLocation = location;
    },
    setIds(ids: any) {
      this.constEventIndexes = ids;
    },
    getIndex(str: string) {
      return this.constEventIndexes.indexOf(str);
    },
    async setUser(user: any) {
      this.user = user;
      console.log(this.user)
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
    async init() {
      const eventsStore = useStoreEvents();
      await eventsStore.init();
      const storeAuth = useStoreAuth();
      await storeAuth.init();
    },
    getEventsList() {
      return this.eventsList;
    },
    checkEventDate(eventDate: any) {
      //get current date, convert to Timestamp and compare with eventDate
      const currentDate = new Date();
      const currentTimestamp = Timestamp.fromDate(currentDate);
      const eventTimestamp = Timestamp.fromDate(eventDate.toDate());
      const isEventDateValid = eventTimestamp >= currentTimestamp;
      return isEventDateValid;
    },
    async setEventsList(eventsList: any = null) {
      //check dates of each event and remove events with invalid dates then set this.eventsList
      const validEventsList = eventsList.filter((event: any) =>
        this.checkEventDate(event.date)
      );
      this.eventsList = validEventsList;
    },
    async initLocations() {
      const eventsList = this.getEventsList();
      const locations = eventsList.map((item: any) => ({
        lat: item.location.latitude,
        lng: item.location.longitude,
      }));
      this.eventsLocations = locations;
    },
    async registerStore(email: string, password: string, name: string) {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const storeAuth = useStoreAuth();
      if (response) {
        this.user = response.user;
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
        this.user = response.user;
        router.push("/");
      } else {
        throw new Error("login failed");
      }
    },
    async logoutStore() {
      await signOut(auth);
      this.user = null;
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
      console.log(this.user.uid)
      await addDoc(eventsCollection, {
        name: event.name,
        description: event.description,
        location: new GeoPoint(event.location.lat, event.location.lng),
        date: event.date,
        creator: this.user.uid,
      });
    },
  },
});
