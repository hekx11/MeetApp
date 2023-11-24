<script setup lang="ts">
import { ref, computed } from 'vue'
import { Timestamp } from 'firebase/firestore';
import { useFirestoreStore } from '@/stores/fireStoreDB';

const emit = defineEmits(['close'])
const store = useFirestoreStore()
const name = ref('')
const description = ref('')
const location = ref({
    lat: 0,
    lng: 0
})
const datetime = ref('')
const timestamp = computed(() => {
    if (!datetime.value) return null;

    // Convert the local date to UTC
    const inputDate = new Date(datetime.value);
    const utcDate = new Date(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate(), inputDate.getUTCHours(), inputDate.getUTCMinutes());

    console.log('Input Date (UTC):', utcDate);
    return Timestamp.fromDate(utcDate);
});

const todayDate = computed(() => {
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = `${(now.getUTCMonth() + 1)}`.padStart(2, '0');
    const day = `${now.getUTCDate()}`.padStart(2, '0');
    const today = `${year}-${month}-${day}T${now.getUTCHours()}:${now.getUTCMinutes()}`;
    return today;
});

const createEvent = () => {
    const event = {
        name: name.value,
        description: description.value,
        location: location.value,
        date: timestamp.value
    };

    console.log('Event Object:', event);

    if (!event.location || !event.date) {
        console.error('Invalid event data. Location or date is missing.');
        return;
    }

    try {
        store.addEventToDb(event);
        console.log('Event successfully added to Firestore.');
    } catch (error) {
        console.error('Error adding event to Firestore:', error);
    }

    name.value = '';
    description.value = '';
    location.value = { lat: 0, lng: 0 };
    datetime.value = '';
};

function updateLocation(coordinates: { lat: number, lng: number }) {
    location.value = coordinates
}

function close() {
    emit("close")
}

defineExpose({
    updateLocation
})
</script>


<template>
    <div id="container">
        <div class="createEvent">
            <div class="button">
                <button @click="close()">
                    Close
                </button>
            </div>
            <h1>Create New Event</h1>
            <form @submit.prevent="createEvent">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required maxlength="30">
                <label for="description">Description:</label>
                <textarea id="description" v-model="description" maxlength="200" required></textarea>
                <label for="locationlat">Location:</label>
                <input type="text" id="locationlat" v-model="location.lat" required>
                <input type="text" id="locationlng" v-model="location.lng" required>
                <label for="date">Date:</label>
                <input type="datetime-local" :min="todayDate" id="date" v-model="datetime" required>
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

.createEvent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.createEvent form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>


