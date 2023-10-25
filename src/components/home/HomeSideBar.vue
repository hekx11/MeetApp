<script setup lang="ts">
import { reactive } from "vue"
const eventsListExample = [
    {
        "name": "Event 1 name",
        "description": "Event 1 description",
    },
    {
        "name": "Event 2 name",
        "description": "Event 2 description",
    },
    {
        "name": "Event 3 name",
        "description": "Event 3 description",
    }
]
interface IsActive {
    [key: number]: boolean;
}

const isActive = reactive<IsActive>({});

const toggleAccordion = async (i: number): Promise<void> => {
    isActive[i] = isActive[i] ? !isActive[i] : true;
};
</script>
<template>
    <div id="home-side-bar">
        <div class="search-box">
            <input type="text" placeholder="Search" />
        </div>
        <div class="events-container">
            <h2>Events list</h2>
            <div class="events">
                <div v-for="(item, id) in eventsListExample" :key="id" class="event-item">
                    <div @click="() => toggleAccordion(id) ">
                        <h3>{{ item.name }}</h3>
                        <p :class="{ 'is-open': !!isActive[id] }">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="create-event-btn">
            <button>Create event</button>
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
    width: 300px;
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