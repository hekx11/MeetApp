<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import { useFirestoreStore } from '@/stores/fireStoreDB';
import { defineProps } from 'vue'
import { ref } from 'vue'

const store = useFirestoreStore()
const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
const markerLocations = store.getLocations()

const thisZoom = ref(12)
const thisCenter = ref({ lat: 50.033687, lng: 22.005063 })
const updateZoom = (zoom: number) => {
    thisZoom.value = zoom
}
const updateCenter = (center: any) => {
    thisCenter.value = center
}
defineExpose({
    updateZoom,
    updateCenter
})


</script>
<template>
    <div id="map-container">
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 100%" :center="thisCenter" :zoom="thisZoom">
            <Marker v-for="(item, id) in markerLocations" :key="id" :options="{ position: item }" />
        </GoogleMap>
    </div>
</template>
<style scoped>
#map-container {
    background-color: antiquewhite;
}
</style>