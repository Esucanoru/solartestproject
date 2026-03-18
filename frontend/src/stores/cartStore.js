import { reactive } from 'vue';
import { api } from '../services/api';

export const cartStore = reactive({
  cart: null,
  async load() {
    const response = await api.getCart();
    this.cart = response.data;
  },
});
