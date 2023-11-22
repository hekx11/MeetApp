import { onAuthStateChanged } from "firebase/auth";
import { defineStore } from "pinia";
import { toRefs } from "vue";
import { useFirestoreStore } from "@/stores/fireStoreDB";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firestore/init";

export const useStoreEvents = defineStore("storeEvents", () => {
  const state = {
    events: null as any,
    ids: null as any
  };
  const storeFirestore = useFirestoreStore();
  const init = () => {
    return new Promise(async (resolve) => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
              const eventsCollection = collection(db, "events");
              const eventsSnapshot = await getDocs(eventsCollection);
              const eventsList = eventsSnapshot.docs.reverse().map((doc) => doc.data());
              const idList = eventsSnapshot.docs.reverse().map((doc) => doc.id)
              state.events = eventsList; 
              state.ids = idList;
              storeFirestore.setIds(state.ids);
              storeFirestore.setEventsList(state.events);
              storeFirestore.initLocations();
              //console.log('logged in:',state.user);
            } else {
              state.events = null;
            }
            resolve(state.events);
        });
    });
  };
  return {
    ...toRefs(state), // To expose reactive properties
    init,
  };
});
