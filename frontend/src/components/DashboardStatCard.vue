<template>
  <div class="stat-card">
    <span>{{ item.label }}</span>
    <strong>{{ item.value }}</strong>
  </div>
</template>

<script setup>
defineProps({
  item: { type: Object, required: true },
});
</script>
