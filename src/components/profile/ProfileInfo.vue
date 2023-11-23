<script setup lang="ts">
import { useFirestoreStore } from '@/stores/fireStoreDB';

const store = useFirestoreStore()
const user = store.$state.user.displayName;
</script>

<template>
    <div id="info-contain">
        <h1>General information</h1>
        <div>
            <div>Name: {{ user }}</div>
            <div></div>
        </div>
    </div>
</template>
<style scoped>
#info-contain{
    width: 100%;
    height: calc(100vh - 68px) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>