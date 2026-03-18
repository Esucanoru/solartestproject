<template>
  <form class="custom-form" @submit.prevent="submit">
    <div class="form-grid">
      <input v-model="form.subject" placeholder="Project title" />
      <input v-model="form.budget" placeholder="Budget range" />
      <input v-model="form.materials" placeholder="Preferred materials" />
      <input v-model="form.dimensions" placeholder="Dimensions" />
    </div>
    <textarea v-model="form.description" rows="6" placeholder="Describe the custom piece"></textarea>
    <button class="btn-primary" type="submit">Submit custom request</button>
    <p v-if="submitted" class="success-note">Request submitted in demo mode.</p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { api } from '../services/api';

const submitted = ref(false);
const form = reactive({
  subject: '',
  budget: '',
  materials: '',
  dimensions: '',
  description: '',
});

async function submit() {
  await api.submitCustomRequest(form);
  submitted.value = true;
}
</script>
