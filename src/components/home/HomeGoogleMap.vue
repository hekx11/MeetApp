<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import { useFirestoreStore } from '@/stores/fireStoreDB';
import { GeoPoint } from "firebase/firestore";
const store = useFirestoreStore()
function getLocations() {
    const locations: GeoPoint[] = store.getEventsList().map((item: any) => item.location);
    return locations.map((item: GeoPoint) => ({ lat: item.latitude, lng: item.longitude }));
}

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
const center = { lat: 50.033687, lng: 22.005063 };
const markerLocations = getLocations()
</script>
<template>
    <div id="map-container">
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 100%" :center="center" :zoom="15">
            <Marker v-for="(item, id) in markerLocations" :key="id" :options="{ position: item }" />
        </GoogleMap>
    </div>
</template>
<style scoped>
#map-container {
    background-color: antiquewhite;
}
</style>