<template>
  <div v-if="payload" class="container">
    <div class="section-header">
      <p class="eyebrow">Seller Dashboard</p>
      <h1>Atelier Rowan</h1>
    </div>
    <div class="stats-grid">
      <DashboardStatCard v-for="item in payload.stats" :key="item.label" :item="item" />
    </div>
    <section class="dashboard-section">
      <h2>Recent products</h2>
      <div class="product-grid">
        <ProductCard v-for="product in payload.recent_products" :key="product.id" :product="product" :sellers="[{ id: 2, store_name: 'Atelier Rowan' }]" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from '../services/api';
import DashboardStatCard from '../components/DashboardStatCard.vue';
import ProductCard from '../components/ProductCard.vue';

const payload = ref(null);

onMounted(async () => {
  const response = await api.getSellerDashboard();
  payload.value = response.data;
});
</script>
