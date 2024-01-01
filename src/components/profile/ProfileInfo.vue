<script setup lang="ts">
import { useFirestoreStore } from '@/stores/fireStoreDB';

const store = useFirestoreStore()
const user = store.$state.profileData;
const eventsList = store.getEventsList()
function eventsCreated(events: any) {
    return events.filter((item: any) => item.creator === user.uid)
}
function timestamptoDate(timestamp: any) {
    const date = new Date(timestamp.seconds * 1000)
    return date.toLocaleDateString()
}
</script>

<template>
    <div id="info-contain">
        <h1><span>General information</span></h1>

        <br />
        <div class="info-contain-text">
            <div>
                <h2><span>Username: </span>{{ user.name }}</h2>
                <h2><span>Email: </span>{{ user.email }}</h2>
                <h2><span>Events created:</span></h2>
                <ul>
                    <li v-for="(item, id) in eventsCreated(eventsList)" :key="id">
                        Name: {{ item.name }} <br />
                        Date: {{timestamptoDate(item.date) }} <br/>
                        Description: {{ item.description }}
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
#info-contain {
    width: 100%;
    height: calc(100vh - 68px) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.info-contain-text {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

span {
    font-weight: bold;
}
</style>