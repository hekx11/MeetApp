<script setup lang="ts">
import HomeSideBar from "./HomeSideBar.vue"
import HomeGoogleMap from "./HomeGoogleMap.vue"
import HomeNewEvent from "./HomeNewEvent.vue";
import { ref } from 'vue'

const showCreateEvent = ref(false)
const showNewEvent = () => {
    showCreateEvent.value = !showCreateEvent.value
}
const sidebar = ref(null as any)
const child = ref(null as any)
const prevObj = ref(null as any)
const centered = async (obj: any) => {
    if (prevObj.value === obj) {
        child.value.updateZoom(12)
    }
    else {
        child.value.updateZoom(15)
        prevObj.value = obj
    }
    child.value.updateCenter(obj)
}

</script>
<template>
    <div>
        <Suspense>
            <HomeSideBar @onpress="centered" ref="sidebar" @createevent="showNewEvent" />
        </Suspense>
        <Suspense>
            <HomeGoogleMap ref="child" />
        </Suspense>
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