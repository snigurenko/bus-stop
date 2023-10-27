<template>
    <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>
    <div v-else class="d-flex flex-column flex-grow-1 temp">
        <div class="mt-3 p-4 bg-white rounded-1">
            <h6>Select Bus Line</h6>
            <div class="d-flex flex-row flex-wrap gap-2">
                <button
                    class="btn btn-primary px-3 py-2 rounded-1"
                    v-for="bus in lines"
                    :key="bus"
                    @click="selectBus(bus)"
                >
                    {{ bus }}
            </button>
            </div>
        </div>
        <div class="d-flex gap-3 mt-3 box">
            <div v-if="!selectedBus" class="w-50 box-content d-flex border border-2 border-secondary rounded-1">
                <p class="m-auto">Please select the bus line first</p>
            </div>

            <div v-else class="d-flex flex-column bg-white w-50 font12">
                <div class="p-4 pb-0">
                    <h6>Bus Stops: {{selectedBus}}</h6>
                </div>
                <TSelect
                    label="Bus Lines"
                    :items="stops"
                    v-model="selectedStop"
                    sortable
                />
            </div>
            <div v-if="!selectedStop" class="w-50 box-content d-flex border border-2 border-secondary rounded-1">
                <p class="m-auto">Please select the bus stop first</p>
            </div>
            <div v-else class="d-flex flex-column bg-white w-50 font12">
                <div class="p-4 pb-0">
                    <h6>Bus Stop: {{selectedStop}}</h6>
                </div>
                <TSelect
                    label="Time"
                    :items="TimeItems"
                />
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { computed, ref, watch } from 'vue';

import TSelect from '@/components/TSelect.vue';
import { Timetable } from '@/interface/Timetable';

const store = useStore();

const selectedBus = ref<number | null>(null);
const selectedStop = ref<string>("");
const stops = ref<string[]>([]);

const loading = computed(() => store.getters.loading);
const lines = computed(() => store.getters.getLines);

const selectBus = (bus: number) => {
    selectedBus.value = bus;
    selectedStop.value = "";
};

const stopsFromStore = computed(() => {
    return store.getters.getStops(selectedBus.value);
});

const TimeItems = computed(() => {
  if (!selectedStop.value) return [];
  
  const selectedBusValue = selectedBus.value;
  const selectedStopValue = selectedStop.value;

  return [...new Set(
    store.getters.getStopsTime(selectedBusValue, selectedStopValue)
      .map((stop: Timetable) => stop.time)
  )];
});


watch(selectedBus, (newBus) => {
    if (newBus) {
        stops.value = [...stopsFromStore.value.keys()];
    } else {
        stops.value = [];
    }
});


</script>

<style scoped>
.box-content {
    --bs-border-style: dashed;
}
.box {
    height: 50vw;
}
.font12 {
    font-size: 12px;
}
</style>
