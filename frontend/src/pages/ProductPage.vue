<template>
  <div v-if="payload" class="container product-layout">
    <ProductGallery :images="payload.product.images" :title="payload.product.title" />
    <section class="product-detail-card">
      <p class="eyebrow">Product</p>
      <h1>{{ payload.product.title }}</h1>
      <p>{{ payload.product.description }}</p>
      <strong class="price-tag">${{ payload.product.price }}</strong>
      <ProductSpecs :product="payload.product" />
      <div class="detail-actions">
        <router-link class="btn-primary" to="/cart">Add to cart</router-link>
        <router-link class="btn-secondary" to="/custom-request">Request custom version</router-link>
      </div>
    </section>
    <SellerCard :seller="payload.seller" />
    <ReviewList :reviews="payload.reviews" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from '../services/api';
import ProductGallery from '../components/ProductGallery.vue';
import ProductSpecs from '../components/ProductSpecs.vue';
import ReviewList from '../components/ReviewList.vue';
import SellerCard from '../components/SellerCard.vue';

const props = defineProps({
  id: { type: String, required: true },
});

const payload = ref(null);

onMounted(async () => {
  const response = await api.getProduct(props.id);
  payload.value = response.data;
});
</script>
