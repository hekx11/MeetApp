<script setup lang="ts">
import { ref } from 'vue'
import { useFirestoreStore } from '@/stores/fireStoreDB';
import router from '@/router';

const registerToggle = ref(false)
const loginEmail = ref('')
const loginPassword = ref('')
const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')
const store = useFirestoreStore()
function logIn(login: string, password: string) {
    store.logInStore(login, password)
    router.push('/')
}
function registerForm(name: string, email: string, password: string) {
    store.registerStore(name, email, password)
    router.push('/')
}

</script>

<template>
    <div id="login-view">
        <div class="container">
            <v-icon v-if="registerToggle" name="bi-arrow-left" scale="2" @click="registerToggle = !registerToggle"
                style="cursor:pointer"></v-icon>

            <h1 v-if="!registerToggle">Log In</h1>
            <h1 v-if="registerToggle">Sign Up</h1>

            <div class="login-view-form">
                <form v-if="!registerToggle" id="loginForm">
                    <input required type="name" v-model="loginEmail" placeholder="Email@example.com">
                    <input required type="password" v-model="loginPassword" placeholder="Password">
                </form>

                <form v-if="registerToggle" id="registerForm">
                    <input required type="name" v-model="registerName" placeholder="John">
                    <input required type="email" v-model="registerEmail" placeholder="Email@example.com">
                    <input required type="password" v-model="registerPassword" placeholder="Password">
                </form>
            </div>

            <div class="login-view-buttons">
                <button v-if="!registerToggle" @click="logIn(loginEmail, loginPassword)"
                    style="margin-right:10px;background-color:#66DB87;color:white;">
                    Log In
                </button>

                <button v-if="!registerToggle" @click="registerToggle = !registerToggle"
                    style="background-color: #3E4372; color:white;">
                    Sign Up
                </button>

                <button v-if="registerToggle" style="background-color: #3E4372; color:white;"
                    @click="registerForm(registerEmail,registerPassword,registerName)">
                    Sign Up
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
#login-view {
    background-color: #EEEDFF;
    height: 100vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-view-buttons {
    display: flex;
    flex-direction: row;
    justify-content: start;
}

.login-view-buttons button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: 0.25px solid #000000;
    font-size: 1rem;
    background-color: #EEEDFF;
    color: #000000;
    cursor: pointer;
}

h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: bold;
}

form {
    display: flex;
    flex-direction: column;
}

input {
    margin: 0.25rem 0;
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #000000;
    font-size: 1rem;
    width: 20rem;
}
</style>