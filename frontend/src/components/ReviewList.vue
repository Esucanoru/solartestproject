<template>
  <section class="review-list">
    <h3>Reviews</h3>
    <article v-for="review in reviews" :key="review.id" class="review-item">
      <strong>{{ review.title }}</strong>
      <p>{{ review.body }}</p>
      <span>{{ review.reviewer_name }} · {{ review.rating }} ★</span>
    </article>
  </section>
</template>

<script setup>
defineProps({
  reviews: { type: Array, default: () => [] },
});
</script>
