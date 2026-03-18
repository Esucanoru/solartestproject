const API_BASE = '/api';

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
}

export const api = {
  getHome: () => request('/home'),
  getCategories: () => request('/categories'),
  getProducts: () => request('/products'),
  getProduct: (id) => request(`/products/${id}`),
  getSeller: (id) => request(`/sellers/${id}`),
  getSellers: () => request('/sellers'),
  getCart: () => request('/cart'),
  checkout: (payload) => request('/checkout', { method: 'POST', body: JSON.stringify(payload) }),
  submitCustomRequest: (payload) => request('/custom-request', { method: 'POST', body: JSON.stringify(payload) }),
  getSellerDashboard: () => request('/seller/dashboard'),
  getAdminOverview: () => request('/admin/overview'),
  getPendingSellers: () => request('/admin/sellers/pending'),
  getPendingProducts: () => request('/admin/products/pending'),
};
