<script setup lang="ts">
import { ref } from 'vue'
import { GeoPoint, Timestamp } from 'firebase/firestore';
import { useFirestoreStore } from '@/stores/fireStoreDB';

const store = useFirestoreStore()

const name = ref('')
const description = ref('')
const location = ref({
    lat: 0,
    lng: 0
})
const date = ref('')
function dateToTimestamp(date: string) {
    const timestamp = Timestamp.fromDate(new Date(date))
    return timestamp
}
const createEvent = () => {
    const event = {
        name: name.value,
        description: description.value,
        location: location.value,
        date: dateToTimestamp(date.value)
    }
    store.addEventToDb(event)
    name.value = ''
    description.value = ''
    location.value = {
        lat: 0,
        lng: 0
    } 
    date.value = ''
}
</script>
<template>
    <div id="container">
        <div class="createEvent">
            <h1>Create New Event</h1>
            <form @submit.prevent="createEvent">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required>
                <label for="description">Description:</label>
                <textarea id="description" v-model="description" required></textarea>
                <label for="location">Location:</label>
                <input type="text" id="location" v-model="location.lat" required>
                <input type="text" id="location" v-model="location.lng" required>


                <label for="date">Date:</label>
                <input type="date" id="date" v-model="date" required>
                <button type="submit">Create Event</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
#container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: fit-content;
    height: fit-content;
    background-color: white;
    z-index: 100;
}
.createEvent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.createEvent form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>


