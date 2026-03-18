import { approvedProducts, respond } from '../_lib/data.js';

export default function handler(_req, res) {
  const products = approvedProducts();

  res.status(200).json(
    respond(products, {
      total: products.length,
      filters: ['category', 'material', 'price', 'lead_time', 'customizable'],
    })
  );
}
