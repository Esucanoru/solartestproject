<template>
  <aside class="filter-sidebar">
    <h3>Filter Catalog</h3>
    <div class="filter-group">
      <label>Category</label>
      <select :value="selectedCategory" @change="$emit('update:category', $event.target.value)">
        <option value="">All categories</option>
        <option v-for="category in categories" :key="category.id" :value="category.slug">
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="filter-group">
      <label>Customizable</label>
      <select :value="customizableOnly" @change="$emit('update:customizable', $event.target.value)">
        <option value="">Any</option>
        <option value="true">Customizable only</option>
      </select>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  categories: { type: Array, default: () => [] },
  selectedCategory: { type: String, default: '' },
  customizableOnly: { type: String, default: '' },
});

defineEmits(['update:category', 'update:customizable']);
</script>
