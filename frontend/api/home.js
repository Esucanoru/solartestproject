import { approvedProducts, approvedSellers, getCategories, respond } from './_lib/data.js';

export default function handler(_req, res) {
  res.status(200).json(
    respond({
      hero: {
        eyebrow: 'Handcrafted furniture marketplace',
        headline: 'Distinctive furniture from independent makers.',
        subheadline: 'Discover collectible pieces, boutique workshops, and made-to-order craftsmanship.',
        primary_cta: { label: 'Browse catalog', href: '/catalog' },
        secondary_cta: { label: 'Request custom work', href: '/custom-request' },
      },
      featured_categories: getCategories().slice(0, 6),
      featured_products: approvedProducts().slice(0, 6),
      featured_sellers: approvedSellers().slice(0, 4),
    })
  );
}
