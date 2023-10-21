<script setup lang="ts"></script>
<template>
    <div id="home-side-bar">
        <div class="search-box">
            <input type="text" placeholder="Search" />
        </div>
        <div class="events-container">
            <h2>Events list</h2>
            <div class="events">
                <div class="event-item">
                    aaa
                </div>
                <div class="event-item">
                    aaa
                </div>
                <div class="event-item">
                    aaa
                </div>
            </div>
        </div>
        <div class="create-event-btn"></div>
    </div>
</template>
<style scoped>
.search-box {
    width: 100%;
    height: 70px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-bg-secondary);
}
.search-box input {
    width: 90%;
    height: 50%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 10px;
}
#home-side-bar {
    width: 30%;
    height: calc(100vh - 68px) !important;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.events-container {
    background-color: var(--color-bg-sidebar);
    height: 100%;
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.events{
    width:100%;
}
.event-item {
    width:100%;
    background-color: white ;
    padding: 5px 10px;
    border: 0.25px solid black;
}
</style>