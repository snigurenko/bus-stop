<template>
    <div class="mt-3 bg-white rounded-1">
        <div class="p-2 grid">
            <div class="position-relative col-12 col-sm-4">
                <input
                    class="form-control"
                    placeholder="Search..."
                    v-model="searchValue"
                >
                <SearchIcon class="search"/>
            </div>
        </div>

        <TSelect
            label="Bus Stops"
            :items="stopsNames"
            :search="searchValue"
            sortable
            class="font12"
        />
    </div>
</template>

<script setup lang="ts">
import TSelect from '@/components/TSelect.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import SearchIcon from '../assets/icons/SearchIcon.vue';


const store = useStore();
const searchValue = ref<string>("");

const stopsNames = computed(() => {
  return searchValue.value
    ? store.getters.getStopsNames.filter((stopName: string) =>
        stopName.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    : store.getters.getStopsNames;
});

</script>

<style scoped>
.font12 {
    font-size: 12px;
}
.search {
    position: absolute;
    top: 10px;
    right: 16px
}
</style>