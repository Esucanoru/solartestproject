<template>
  <div class="specs-card">
    <h3>Specifications</h3>
    <ul>
      <li>Materials: {{ product.materials.join(', ') }}</li>
      <li>Dimensions: {{ product.dimensions.width_cm }} × {{ product.dimensions.depth_cm }} × {{ product.dimensions.height_cm }} cm</li>
      <li>Lead time: {{ product.lead_time_days }} days</li>
      <li>Customizable: {{ product.is_customizable ? 'Yes' : 'No' }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  product: { type: Object, required: true },
});
</script>
