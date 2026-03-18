import { reactive } from 'vue';
import { api } from '../services/api';

export const marketplaceStore = reactive({
  home: null,
  products: [],
  categories: [],
  sellers: [],
  async bootstrap() {
    const [homeResponse, productsResponse, categoriesResponse, sellersResponse] = await Promise.all([
      api.getHome(),
      api.getProducts(),
      api.getCategories(),
      api.getSellers(),
    ]);

    this.home = homeResponse.data;
    this.products = productsResponse.data;
    this.categories = categoriesResponse.data;
    this.sellers = sellersResponse.data;
  },
});
