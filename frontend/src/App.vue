<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="page-shell">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue';
</script>
