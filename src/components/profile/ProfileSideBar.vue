<script setup lang="ts">
import { ref, onMounted} from 'vue';
import { useFirestoreStore } from '@/stores/fireStoreDB';
onMounted (() => {
    console.log(store.$state.user.data?.displayName);
})
const store = useFirestoreStore()

const profileName = store.$state.user.data?.displayName
const email = store.$state.user.data?.email
</script>

<template>
    <div class="profile-sidebar">
        <div class="profile-info">
            <div class="avatar">
                <img src="https://via.placeholder.com/150" alt="Profile Avatar" />
            </div>
            <div class="details">
                <p>{{ profileName }}</p>
                <p>{{ email }}</p>
            </div>
        </div>
        <div class="options">
            <ul>
                <li>
                    <router-link to="/profile-information">Profile Information</router-link>
                </li>
                <li>
                    <router-link to="/settings">Settings</router-link>
                </li>
                <li>
                    <router-link to="/reviews">Reviews</router-link>
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
}

.options li a {
    color: #333;
    text-decoration: none;
}
</style>