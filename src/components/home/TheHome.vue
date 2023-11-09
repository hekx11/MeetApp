<script setup lang="ts">
import HomeSideBar from "./HomeSideBar.vue"
import HomeGoogleMap from "./HomeGoogleMap.vue"
import HomeNewEvent from "./HomeNewEvent.vue";
import { onBeforeMount } from "vue"
import { useFirestoreStore } from '@/stores/fireStoreDB';
import { ref, onMounted, onUnmounted } from 'vue'

const showCreateEvent = ref(false)
const showNewEvent = () => {
    showCreateEvent.value = !showCreateEvent.value
}
const store = useFirestoreStore()
const sidebar = ref(null as any)
const child = ref(null as any)
const centered = (obj: any) => {
    const isActive = sidebar.value.checkAnyStillActive()
    child.value.updateCenter(obj)
    if (!isActive) {
        child.value.updateZoom(12)
    }
    else
        child.value.updateZoom(15)
}

</script>
<template>
    <div>
        <HomeSideBar @onpress="centered" ref="sidebar" @createevent="showNewEvent"/>
        <HomeGoogleMap ref="child" />
        <HomeNewEvent v-if="showCreateEvent" />
    </div>
</template>
<style scoped>
div {
    width: 100%;
    height: 100%;
    display: flex;
}
</style>