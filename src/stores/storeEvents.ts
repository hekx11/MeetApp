import { onAuthStateChanged } from "firebase/auth";
import { defineStore } from "pinia";
import { toRefs } from "vue";
import { useFirestoreStore } from "@/stores/fireStoreDB";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firestore/init";

export const useStoreEvents = defineStore("storeEvents", () => {
  const state = {
    events: null as any,
    ids: null as any,
    currentLocation: null as any
  };
  const storeFirestore = useFirestoreStore();
  const init = () => {
    return new Promise(async (resolve) => {
      onAuthStateChanged(auth, async (firebaseUser) => {
            const success = async (position: any) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                state.currentLocation = { lat: latitude, lng: longitude };
              };
              const error = (err: any) => {
                console.error(err);
              };
              navigator.geolocation.getCurrentPosition(success, error);
            if (firebaseUser) {
              const eventsCollection = collection(db, "events");
              const eventsSnapshot = await getDocs(eventsCollection);
              const eventsList = eventsSnapshot.docs.reverse().map((doc) => doc.data());
              const idList = eventsSnapshot.docs.reverse().map((doc) => doc.id)
              
              state.events = eventsList; 
              state.ids = idList;
              storeFirestore.setEventsList(state.events);
              storeFirestore.setIds(state.ids);
              storeFirestore.initLocations();
              storeFirestore.setUserLocation(state.currentLocation)
            } else {
              state.events = null;
            }
            resolve(state.events);
        });
    });
  };
  return {
    ...toRefs(state),
    init,
  };
});
