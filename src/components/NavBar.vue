<template>
  <nav class="mt-4 px-4 d-flex bg-white rounded-1">
      <router-link
          v-for="link in links"
          :key="link.id.toString()"
          class="nav-item"
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
.nav-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 500;
    line-height: 24px;
    color: #9A9DA4;
    padding: 18px;
    &.router-link-active {
        color: #33373C;
        border-bottom: #1952E1 2px solid;
    }
}
</style>
