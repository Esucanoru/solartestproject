<template>
  <article class="product-card">
    <img :src="product.images[0]" :alt="product.title" class="product-card-image" />
    <div class="product-card-body">
      <div class="product-card-meta">
        <span>{{ sellerName }}</span>
        <span>{{ product.rating }} ★</span>
      </div>
      <h3>{{ product.title }}</h3>
      <p>{{ product.materials.join(' • ') }}</p>
      <div class="product-card-footer">
        <strong>${{ product.price }}</strong>
        <router-link :to="`/product/${product.id}`">View</router-link>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: { type: Object, required: true },
  sellers: { type: Array, default: () => [] },
});

const sellerName = computed(() => {
  return props.sellers.find((seller) => seller.id === props.product.seller_id)?.store_name || 'Independent maker';
});
</script>
