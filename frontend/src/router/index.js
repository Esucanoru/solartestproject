import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import CatalogPage from '../pages/CatalogPage.vue';
import ProductPage from '../pages/ProductPage.vue';
import SellerStorePage from '../pages/SellerStorePage.vue';
import CartPage from '../pages/CartPage.vue';
import CheckoutPage from '../pages/CheckoutPage.vue';
import SellerDashboardPage from '../pages/SellerDashboardPage.vue';
import AdminDemoPage from '../pages/AdminDemoPage.vue';
import CustomRequestPage from '../pages/CustomRequestPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/catalog', component: CatalogPage },
  { path: '/product/:id', component: ProductPage, props: true },
  { path: '/seller/:id', component: SellerStorePage, props: true },
  { path: '/cart', component: CartPage },
  { path: '/checkout', component: CheckoutPage },
  { path: '/custom-request', component: CustomRequestPage },
  { path: '/seller/dashboard', component: SellerDashboardPage },
  { path: '/admin', component: AdminDemoPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
