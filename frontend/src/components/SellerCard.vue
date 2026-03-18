<template>
  <div class="seller-card">
    <p class="eyebrow">Maker</p>
    <h3>{{ seller.store_name }}</h3>
    <p>{{ seller.short_bio }}</p>
    <div class="seller-card-meta">
      <span>{{ seller.city }}, {{ seller.country }}</span>
      <span>{{ seller.rating_average }} ★</span>
    </div>
    <router-link :to="`/seller/${seller.id}`">Visit storefront</router-link>
  </div>
</template>

<script setup>
defineProps({
  seller: { type: Object, required: true },
});
</script>
