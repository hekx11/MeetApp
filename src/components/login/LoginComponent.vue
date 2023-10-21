<script setup lang="ts">
import { ref } from 'vue'
const registerToggle = ref(false)
</script>
<template>
    <div id="login-view">
        <div>
            <h1>Login</h1>
            <div class="login-view-form">
                <form v-if="!registerToggle">
                    <input required type="email" id="loginEmail" placeholder="Email@example.com">
                    <input required type="password" id="loginPassword" placeholder="Password">
                </form>
            </div>
        </div>
        <button @click="registerToggle = !registerToggle">Register</button>
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