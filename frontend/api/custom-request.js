import { respond } from './_lib/data.js';

export default function handler(req, res) {
  if (req.method && req.method !== 'POST') {
    res.status(405).json(respond({}, {}, 'Method not allowed'));
    return;
  }

  res.status(200).json(
    respond(
      {
        id: 999,
        status: 'submitted',
      },
      {},
      'Custom request submitted'
    )
  );
}
