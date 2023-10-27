<template>
    <div class="list-select">
        <div
            class="list-select__label-container d-flex align-items-center"
            :class="{sortable: sortable}"
            @click="changeSort"
        >
            <h6
                class="list-select__label m-0 p-4 border-bottom border-2 border-light"
                :class="{'pe-2': sortable}"
            >{{label}}</h6>
            <ArrowsIcon v-if="sortable"/>
        </div>
        <ul class="list-unstyled">
            <li
                v-for="item in preparedItemsList"
                :key="item + search"
                class="list-select__item"
                :class="{active: modelValue === item}"
                @click="onItemSelect(item)"
            >
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import ArrowsIcon from '../assets/icons/ArrowsIcon.vue';

type SortDirection = 'ASC' | 'DESC';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    },
    modelValue: {
        type: [Number, String],
    },
    search: {
        default: ''
    },
    sortable: {
        type: Boolean,
        default: false
    }
});
const emit = defineEmits<{
    (e: 'update:modelValue', value: string | number): void,
    (e: 'update:sortDirection', direction: SortDirection | undefined): void,
}>();

const preparedItemsList = computed(() => {
    if (currentSortDirection.value) {
        if (currentSortDirection.value === 'DESC')
            return [...props.items].sort().reverse();
        else
            return [...props.items].sort();
    }
    return props.items;
});

const currentSortDirection = ref<SortDirection>();
watch(() => props.items, () => {
    currentSortDirection.value = undefined;
});
const onItemSelect = (value: string | number) => {
    emit('update:modelValue', value);
};
const changeSort = () => {
    if (!props.sortable)
        return;
    if (!currentSortDirection.value) {
        currentSortDirection.value = 'DESC';
    } else if (currentSortDirection.value === 'DESC') {
        currentSortDirection.value = 'ASC';
    } else {
        currentSortDirection.value = undefined;
    }
    emit('update:sortDirection', currentSortDirection.value);
};
</script>

<style scoped lang="scss">
.list-select {
    max-height: 600px;
    overflow: auto;
    &__label-container.sortable {
        cursor: pointer;
    }
    &__item {
        padding: 1.25rem 1.5rem;
        cursor: pointer;
        transition: all 0.4s;
        &:hover {
            background-color: var(--bs-light);
        }
        &.active {
            color: var(--bs-primary);
        }
    }
}
</style>
