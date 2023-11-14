<script setup lang="ts">
import ProfileSideBar from './ProfileSideBar.vue'
</script>
<template>
    <div id="contain-profile">
        <ProfileSideBar />
        <router-view />
    </div>
</template>
<style scoped>
#contain-profile {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
}
</style>
