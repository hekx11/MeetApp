<script setup lang="ts">
import router from '@/router';

function logout() {
    router.push('/login');
}
</script>

<template>
    <nav class="navbar">
        <div class="navbar-logo">
            <h1>MeetApp</h1>
        </div>
        <div class="navbar-right">
            <router-link to="/">Profile</router-link>
            <button @click="logout">Logout</button>
        </div>
    </nav>
</template>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-logo img {
    height: 2rem;
}

.navbar-right {
    display: flex;
    align-items: center;
}

.navbar-right button {
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #f44336;
    color: #fff;
    cursor: pointer;
}

.navbar-right button:hover {
    background-color: #d32f2f;
}
</style>
