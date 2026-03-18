<template>
  <div class="container">
    <div class="section-header">
      <p class="eyebrow">Admin Demo</p>
      <h1>Marketplace operations overview</h1>
    </div>
    <div v-if="overview" class="stats-grid">
      <DashboardStatCard v-for="item in overview.stats" :key="item.label" :item="item" />
    </div>
    <div class="admin-grid">
      <section class="dashboard-section">
        <h2>Pending sellers</h2>
        <article v-for="seller in pendingSellers" :key="seller.id" class="queue-item">
          <div>
            <strong>{{ seller.store_name }}</strong>
            <p>{{ seller.short_bio }}</p>
          </div>
          <button class="btn-secondary" type="button">Approve</button>
        </article>
      </section>
      <section class="dashboard-section">
        <h2>Pending products</h2>
        <article v-for="product in pendingProducts" :key="product.id" class="queue-item">
          <div>
            <strong>{{ product.title }}</strong>
            <p>{{ product.description }}</p>
          </div>
          <button class="btn-secondary" type="button">Approve</button>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from '../services/api';
import DashboardStatCard from '../components/DashboardStatCard.vue';

const overview = ref(null);
const pendingSellers = ref([]);
const pendingProducts = ref([]);

onMounted(async () => {
  const [overviewResponse, sellersResponse, productsResponse] = await Promise.all([
    api.getAdminOverview(),
    api.getPendingSellers(),
    api.getPendingProducts(),
  ]);

  overview.value = overviewResponse.data;
  pendingSellers.value = sellersResponse.data;
  pendingProducts.value = productsResponse.data;
});
</script>
