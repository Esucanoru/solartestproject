import { getProducts, getReviews, getSellers, respond } from '../_lib/data.js';

export default function handler(req, res) {
  const id = Number(req.query.id);
  const product = getProducts().find((item) => item.id === id);

  if (!product) {
    res.status(404).json(respond({}, {}, 'Product not found'));
    return;
  }

  const seller = getSellers().find((item) => item.id === product.seller_id);
  const reviews = getReviews().filter((item) => item.product_id === id);

  res.status(200).json(
    respond({
      product,
      seller,
      reviews,
    })
  );
}
