<script setup lang="ts">
import HomeSideBar from "./HomeSideBar.vue"
import HomeGoogleMap from "./HomeGoogleMap.vue"
import { onBeforeMount } from "vue"
import { useFirestoreStore } from '@/stores/fireStoreDB';
const store = useFirestoreStore()
onBeforeMount(() => {
    store.setEventsList()
})
</script>
<template>
    <div>
        <HomeSideBar />
        <HomeGoogleMap />
    </div>
</template>
<style scoped>
div {
    width: 100%;
    height: 100%;
    display: flex;
}
</style>