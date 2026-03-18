<template>
  <div class="container page-grid">
    <FilterSidebar
      :categories="categories"
      :selected-category="selectedCategory"
      :customizable-only="customizableOnly"
      @update:category="selectedCategory = $event"
      @update:customizable="customizableOnly = $event"
    />
    <section>
      <div class="section-header">
        <p class="eyebrow">Catalog</p>
        <h1>Handcrafted furniture listings</h1>
      </div>
      <div class="product-grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" :sellers="sellers" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import FilterSidebar from '../components/FilterSidebar.vue';
import ProductCard from '../components/ProductCard.vue';
import { marketplaceStore } from '../stores/marketplaceStore';

const selectedCategory = ref('');
const customizableOnly = ref('');

const categories = computed(() => marketplaceStore.categories);
const sellers = computed(() => marketplaceStore.sellers);
const filteredProducts = computed(() => {
  return marketplaceStore.products.filter((product) => {
    const category = !selectedCategory.value || categories.value.find((item) => item.id === product.category_id)?.slug === selectedCategory.value;
    const customizable = customizableOnly.value !== 'true' || product.is_customizable;
    return category && customizable;
  });
});

onMounted(async () => {
  if (!marketplaceStore.products.length) {
    await marketplaceStore.bootstrap();
  }
});
</script>
