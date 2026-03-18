<template>
  <div class="container narrow">
    <div class="section-header">
      <p class="eyebrow">Checkout</p>
      <h1>Demo checkout</h1>
    </div>
    <form class="custom-form" @submit.prevent="submit">
      <div class="form-grid">
        <input v-model="form.name" placeholder="Full name" />
        <input v-model="form.email" placeholder="Email" />
        <input v-model="form.address" placeholder="Address" />
        <input v-model="form.city" placeholder="City" />
      </div>
      <input v-model="form.card" placeholder="Card number (demo)" />
      <button class="btn-primary" type="submit">Place mock order</button>
      <p v-if="confirmation" class="success-note">Order {{ confirmation.order_number }} created with status {{ confirmation.status }}.</p>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { api } from '../services/api';

const form = reactive({
  name: '',
  email: '',
  address: '',
  city: '',
  card: '',
});

const confirmation = ref(null);

async function submit() {
  const response = await api.checkout(form);
  confirmation.value = response.data;
}
</script>
