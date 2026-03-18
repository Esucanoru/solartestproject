<template>
  <div class="product-gallery">
    <img :src="images[0]" :alt="title" class="product-gallery-main" />
  </div>
</template>

<script setup>
defineProps({
  images: { type: Array, default: () => [] },
  title: { type: String, default: '' },
});
</script>
