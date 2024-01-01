<script setup lang="ts">
import { useFirestoreStore } from '@/stores/fireStoreDB';

const store = useFirestoreStore()

const profileName = store.$state.profileData.name
const email = store.$state.profileData.email
</script>

<template>
    <div class="profile-sidebar">
        <div class="profile-info">
            <div class="avatar">
                <img src="https://via.placeholder.com/150" alt="Profile Avatar" />
            </div>
            <div class="details">
                <p style="font-weight: bold;">{{ profileName }}</p>
                <p>{{ email }}</p>
            </div>
        </div>
        <div class="options">
            <ul>
                <li>
                    <router-link :to="{ name: 'profile-info'}" style="font-weight: bold;">Profile Information</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'profile-settings' }" style="font-weight: bold;">Settings</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.profile-sidebar {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 68px) !important;
    background-color: var(--color-bg-sidebar);
    width: 30%;
}

.profile-info {
    display: flex;
    align-items: center;
    padding: 1rem;
    height:fit-content;
}

.avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
}

.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.details {
    display: flex;
    flex-direction: column;
}

.options {
    padding: 1rem;
}

.options ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.options li {
    margin-bottom: 0.5rem;
    border: 1px solid #6d6d6d;
    border-radius: 0.25rem;
    padding: 0.5rem;
    background-color: #fff;
}

.options li a {
    color: #333;
    text-decoration: none;
}
</style>