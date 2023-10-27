<template>
      <div class="wrapper d-flex flex-column">
        <h1 class="m-0 fs-2">Timetable</h1>
        <NavBar/>
        <router-view/>
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { useStore } from 'vuex';

const store = useStore();
store.dispatch('fetchTimetable');
</script>

<style scoped>
.wrapper {
    min-height: 100vh;
    padding: 40px 32px;
    background: #F3F4F9;
}

</style>