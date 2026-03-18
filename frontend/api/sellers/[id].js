import { getProducts, getSellers, respond } from '../_lib/data.js';

export default function handler(req, res) {
  const id = Number(req.query.id);
  const seller = getSellers().find((item) => item.id === id);

  if (!seller) {
    res.status(404).json(respond({}, {}, 'Seller not found'));
    return;
  }

  const products = getProducts().filter((item) => item.seller_id === id && item.status === 'approved');

  res.status(200).json(
    respond({
      seller,
      products,
    })
  );
}
