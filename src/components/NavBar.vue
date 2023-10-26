<template>
  <nav class="mt-4 px-4 d-flex flex-row bg-white rounded-1">
      <router-link
          v-for="link in links"
          :key="link.id.toString()"
          class="nav-link-item"
          :to="link.id"
      >
          {{link.label}}
      </router-link>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import primaryNavItems from "../utils/primaryNavItems";


interface NavBarLinks {
  label: string
  id: RouteLocationRaw
}

const links = ref<NavBarLinks[]>(primaryNavItems);

</script>

<style scoped lang="scss">
</style>
