<template>
    <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div v-else class="d-flex flex-column flex-grow-1">
        <div class="mt-3 p-4 bg-white rounded-1">
            <h6>Select Bus Line</h6>
            <div class="d-flex flex-row flex-wrap gap-2">
                <button
                    class="btn btn-primary px-3 py-2 rounded-1"
                    v-for="bus in lines"
                    :key="bus"
                >
                    {{ bus }}
            </button>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
store.dispatch('fetchLines');

const loading = computed(() => store.getters.loading);
const lines = computed(() => store.getters.lines);


</script>

<style scoped>

</style>
