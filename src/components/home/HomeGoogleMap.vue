<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import { onMounted } from "vue";
const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
onMounted(() => {
    console.log(apiKey);
});
const center = { lat: 40.730610, lng: -73.935242 }; 
</script>
<template>
    <div id="map-container">
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 100%" :center="center" :zoom="15">
        </GoogleMap>
    </div>
</template>
<style scoped>
#map-container {
    width: 70%;
    height: 100%;
    background-color: antiquewhite;
}
</style>