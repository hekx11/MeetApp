<template>
    <div>
        <h1>Create New Event</h1>
        <form @submit.prevent="createEvent">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
            <label for="description">Description:</label>
            <textarea id="description" v-model="description" required></textarea>
            <label for="location">Location:</label>
            <input type="text" id="location" v-model="location" required>
            <label for="date">Date:</label>
            <input type="date" id="date" v-model="date" required>
            <label for="time">Time:</label>
            <input type="time" id="time" v-model="time" required>
            <button type="submit">Create Event</button>
        </form>
    </div>
</template>

<script lang="ts" setup>

