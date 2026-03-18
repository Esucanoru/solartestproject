import { getCustomRequests, getOrders, getProducts, respond } from '../_lib/data.js';

export default function handler(_req, res) {
  const sellerId = 2;
  const products = getProducts();
  const orders = getOrders();
  const requests = getCustomRequests();

  res.status(200).json(
    respond({
      stats: [
        { label: 'Active listings', value: products.filter((item) => item.seller_id === sellerId && item.status === 'approved').length },
        { label: 'Open orders', value: orders.filter((item) => item.seller_id === sellerId && item.status !== 'delivered').length },
        { label: 'Custom requests', value: requests.filter((item) => item.seller_id === sellerId).length },
        { label: 'Response time', value: '8h' },
      ],
      recent_products: products.filter((item) => item.seller_id === sellerId),
      recent_orders: orders.filter((item) => item.seller_id === sellerId),
      custom_requests: requests.filter((item) => item.seller_id === sellerId),
    })
  );
}
