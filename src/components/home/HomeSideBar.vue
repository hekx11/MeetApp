<script setup lang="ts">
import { useFirestoreStore } from '@/stores/fireStoreDB';
import { reactive, ref } from "vue"
const store = useFirestoreStore()

const eventsList = store.getEventsList()
const eventLocations = store.getLocations() as any
const emit = defineEmits(['onpress', 'createevent'])
const searchInput = ref('')
const isActiveArray = reactive(Array(eventsList.length).fill(false))
const previousActive = ref(-1)

function createEvent() {
    emit('createevent')
}
function pressed(id: number) {
    const location = eventLocations[id]
    emit('onpress', location)
}
function setActive(id: number) {
    if(previousActive.value !== -1 && previousActive.value !== id) {
        isActiveArray[previousActive.value] = false
    }
    previousActive.value = id
    isActiveArray[id] = !isActiveArray[id]
}
function filterBySearch(searchInput: string) {
    return eventsList.filter((item: any) => {
        return item.name.toLowerCase().includes(searchInput.toLowerCase()) || item.description.toLowerCase().includes(searchInput.toLowerCase())
    })
}
function checkAnyStillActive() {
    for (let i = 0; i < isActiveArray.length; i++) {
        if (isActiveArray[i]) {
            return true
        }
    }
    return false
}
function timestamptoDate(timestamp: any) {
    const date = new Date(timestamp.seconds * 1000)
    return date.toLocaleDateString()
}
defineExpose({
    checkAnyStillActive
})

</script>
<template>
    <div id="home-side-bar">
        <div class="search-box">
            <input type="text" placeholder="Search" v-model="searchInput" />
        </div>
        <div class="events-container">
            <h2>Events list</h2>
            <div class="events">
                <div v-for="(item, id) in filterBySearch(searchInput)" :key="id" class="event-item">
                    <div @click.prevent="setActive(id), pressed(id)">
                        <h3>{{ item.name }}</h3>
                        <p>{{ timestamptoDate(item.date) }}</p>
                        <p v-if="isActiveArray[id]">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="create-event-btn">
            <button @click="createEvent()">Create event</button>
        </div>
    </div>
</template>
<style scoped>
.search-box {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg-secondary);
}

.search-box input {
    width: 90%;
    height: 45%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 10px;
}

#home-side-bar {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.events-container {
    background-color: var(--color-bg-sidebar);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.events-container h2 {
    width: 100%;
    text-align: center;
    padding: 10px 0;
    margin: 0;
}

.events {
    width: 100%;
}

.event-item {
    width: 100%;
    background-color: white;
    padding: 5px 10px;
    margin: 5px 0;
    border: 0.25px solid rgb(186, 186, 186);
}

.event-item:hover {
    background-color: var(--color-bg-button);
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

.create-event-btn {
    width: 100%;
    height: 70px;
}

.create-event-btn button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: var(--color-bg-button);
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
}
</style>