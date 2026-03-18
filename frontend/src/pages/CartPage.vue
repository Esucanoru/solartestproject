<template>
  <div v-if="cart" class="container narrow">
    <div class="section-header">
      <p class="eyebrow">Cart</p>
      <h1>Your curated selection</h1>
    </div>
    <article v-for="item in cart.items" :key="item.id" class="line-item">
      <div>
        <strong>Product #{{ item.product_id }}</strong>
        <p>Qty {{ item.quantity }}</p>
      </div>
      <strong>${{ item.line_total }}</strong>
    </article>
    <div class="summary-card">
      <p>Subtotal: ${{ cart.subtotal }}</p>
      <p>Shipping est.: ${{ cart.shipping_estimate }}</p>
      <h3>Total: ${{ cart.total }}</h3>
      <router-link class="btn-primary" to="/checkout">Proceed to checkout</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { cartStore } from '../stores/cartStore';

const cart = computed(() => cartStore.cart);

onMounted(() => {
  cartStore.load();
});
</script>
