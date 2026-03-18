<template>
  <div v-if="home" class="container">
    <section class="hero">
      <div>
        <p class="eyebrow">{{ home.hero.eyebrow }}</p>
        <h1>{{ home.hero.headline }}</h1>
        <p class="hero-copy">{{ home.hero.subheadline }}</p>
        <div class="hero-actions">
          <router-link class="btn-primary" :to="home.hero.primary_cta.href">{{ home.hero.primary_cta.label }}</router-link>
          <router-link class="btn-secondary" :to="home.hero.secondary_cta.href">{{ home.hero.secondary_cta.label }}</router-link>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-header">
        <p class="eyebrow">Categories</p>
        <h2>Explore by furniture type</h2>
      </div>
      <CategoryGrid :categories="home.featured_categories" />
    </section>

    <section class="section-block">
      <div class="section-header">
        <p class="eyebrow">Featured pieces</p>
        <h2>Curated listings from approved makers</h2>
      </div>
      <div class="product-grid">
        <ProductCard
          v-for="product in home.featured_products"
          :key="product.id"
          :product="product"
          :sellers="sellers"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import CategoryGrid from '../components/CategoryGrid.vue';
import ProductCard from '../components/ProductCard.vue';
import { marketplaceStore } from '../stores/marketplaceStore';

const home = computed(() => marketplaceStore.home);
const sellers = computed(() => marketplaceStore.sellers);

onMounted(async () => {
  if (!marketplaceStore.home) {
    await marketplaceStore.bootstrap();
  }
});
</script>
