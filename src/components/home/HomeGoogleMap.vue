<script setup lang="ts">
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import { useFirestoreStore } from '@/stores/fireStoreDB';
import { ref } from 'vue'

const emit = defineEmits(['saveCoordinates'])
const store = useFirestoreStore()
const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
const markerLocations = ref(store.$state.eventsLocations)
const userLocation = store.$state.currentLocation
const eventsList = store.getEventsList()
const thisZoom = ref(12)
const thisCenter = ref(userLocation)
const updateZoom = (zoom: number) => {
    thisZoom.value = zoom
}
const updateCenter = (center: any) => {
    thisCenter.value = center
    if (markerLocations.value.some((item) => item.lat === center.lat && item.lng === center.lng)) {
        onMarkerClick(center)
    }
    
}
defineExpose({
    updateZoom,
    updateCenter
})
markerLocations.value.forEach((item) => {
    item.infoWindowVisible = false;
});

const userInfoWindow = ref(false)


const userMarkerOptions = ref({
    position: userLocation,
    icon: {
        url: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Ccircle cx='5' cy='5' r='5' fill='${encodeURIComponent(
            'blue')}'/%3E%3C/svg%3E`,
        scaledSize: { width: 15, height: 15 }
    },
    title: "Location"
})
const onMapClick = (event: any) => {
    // Handle the map click event and get the coordinates
    const clickedCoordinates = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
    };
    emit("saveCoordinates", clickedCoordinates)
};
const onMarkerClick = (marker: any) => {
    // Close all other InfoWindows
    markerLocations.value.forEach((item) => {
        item.infoWindowVisible = false;
    });
    marker.infoWindowVisible = true;
};

</script>
<template>
    <div id="map-container">
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 100%" :center="thisCenter" :zoom="thisZoom"
            @click="onMapClick">
            <Marker v-for="(item, id) in markerLocations" :key="id" :options="{ position: item }"
                @click="onMarkerClick(item)">
                <InfoWindow v-model="item.infoWindowVisible">
                    <div>
                        <p> {{ eventsList[id].description }} </p>
                    </div>
                </InfoWindow>
            </Marker>
            <Marker @click="userInfoWindow = !userInfoWindow" :options="userMarkerOptions">
                <InfoWindow v-model="userInfoWindow">
                    <div>
                        <p> Your position </p>
                    </div>
                </InfoWindow>
            </Marker>
        </GoogleMap>
    </div>
</template>
<style scoped>
#map-container {
    background-color: antiquewhite;
}
</style>