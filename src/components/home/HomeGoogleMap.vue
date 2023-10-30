<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;
const center = { lat: 50.033687, lng: 22.005063 };

</script>
<template>
    <div id="map-container">
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 100%" :center="center" :zoom="15">
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>
<style scoped>
#map-container {
    background-color: antiquewhite;
}
</style>