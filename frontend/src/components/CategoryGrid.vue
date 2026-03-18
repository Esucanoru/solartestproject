<template>
  <section class="category-grid">
    <router-link
      v-for="category in categories"
      :key="category.id"
      :to="`/catalog?category=${category.slug}`"
      class="category-card"
    >
      <span class="eyebrow">Category</span>
      <h3>{{ category.name }}</h3>
      <p>{{ category.description }}</p>
    </router-link>
  </section>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    default: () => [],
  },
});
</script>
