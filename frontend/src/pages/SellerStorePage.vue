<template>
  <div v-if="payload" class="container">
    <section class="storefront-hero">
      <div>
        <p class="eyebrow">Storefront</p>
        <h1>{{ payload.seller.store_name }}</h1>
        <p>{{ payload.seller.short_bio }}</p>
      </div>
      <router-link class="btn-primary" to="/custom-request">Send custom request</router-link>
    </section>
    <div class="product-grid">
      <ProductCard v-for="product in payload.products" :key="product.id" :product="product" :sellers="[payload.seller]" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard.vue';

const props = defineProps({
  id: { type: String, required: true },
});

const payload = ref(null);

onMounted(async () => {
  const response = await api.getSeller(props.id);
  payload.value = response.data;
});
</script>
