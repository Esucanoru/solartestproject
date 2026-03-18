import { getSellers, respond } from '../../_lib/data.js';

export default function handler(_req, res) {
  res.status(200).json(
    respond(getSellers().filter((item) => item.approval_status === 'pending'))
  );
}
