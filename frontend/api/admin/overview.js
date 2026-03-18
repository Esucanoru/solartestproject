import { getCustomRequests, getOrders, getProducts, getSellers, respond } from '../_lib/data.js';

export default function handler(_req, res) {
  const sellers = getSellers();
  const products = getProducts();
  const orders = getOrders();
  const requests = getCustomRequests();

  res.status(200).json(
    respond({
      stats: [
        { label: 'Approved sellers', value: sellers.filter((item) => item.approval_status === 'approved').length },
        { label: 'Pending sellers', value: sellers.filter((item) => item.approval_status === 'pending').length },
        { label: 'Pending products', value: products.filter((item) => item.status === 'pending_review').length },
        { label: 'Orders', value: orders.length },
        { label: 'Custom requests', value: requests.length },
      ],
    })
  );
}
