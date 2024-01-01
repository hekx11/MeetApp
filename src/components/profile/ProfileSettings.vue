<script setup lang="ts">
import { ref } from 'vue';
import { useFirestoreStore } from '@/stores/fireStoreDB';

const store = useFirestoreStore();

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const userId = store.$state.user.uid;
const updateUserData = () => {

};

</script>
<template>
    <div id="user-settings">
        <h1>Settings</h1>
        <form @submit="updateUserData">
            <label for="user-name">Update Name </label>
            <input type="text" v-model="name" placeholder="Name" />
            <label for="user-email">Update Email </label>
            <input type="email" v-model="email" placeholder="Email" />
            <label for="user-password">Update Password </label>
            <input type="password" v-model="password" placeholder="Password" />
            <label for="user-password">Confirm New Password </label>
            <input type="password" v-model="passwordConfirm" placeholder="Password" />
            <button type="submit">Update</button>
            <button style="background-color: red">Delete Account</button>

        </form>
    </div>
</template>

<style scoped>
#user-settings {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

input {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #3E4372;
}

button {
    margin: 10px;
    background-color: #3E4372;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
</style>
