import { approvedSellers, respond } from '../_lib/data.js';

export default function handler(_req, res) {
  res.status(200).json(respond(approvedSellers()));
}
