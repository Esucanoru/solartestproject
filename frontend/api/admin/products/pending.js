import { getProducts, respond } from '../../_lib/data.js';

export default function handler(_req, res) {
  res.status(200).json(
    respond(getProducts().filter((item) => item.status === 'pending_review'))
  );
}
