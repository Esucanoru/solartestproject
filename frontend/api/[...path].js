import {
  approvedProducts,
  approvedSellers,
  getCart,
  getCategories,
  getCustomRequests,
  getOrders,
  getProducts,
  getReviews,
  getSellers,
  respond,
} from './_lib/data.js';

function notFound(res, message = 'Not found') {
  res.status(404).json(respond({}, {}, message));
}

function methodNotAllowed(res) {
  res.status(405).json(respond({}, {}, 'Method not allowed'));
}

export default function handler(req, res) {
  const parts = Array.isArray(req.query.path) ? req.query.path : [];
  const route = parts.join('/');
  const method = req.method || 'GET';

  if (route === 'home' && method === 'GET') {
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
    return;
  }

  if (route === 'categories' && method === 'GET') {
    res.status(200).json(respond(getCategories()));
    return;
  }

  if (route === 'products' && method === 'GET') {
    const products = approvedProducts();
    res.status(200).json(
      respond(products, {
        total: products.length,
        filters: ['category', 'material', 'price', 'lead_time', 'customizable'],
      })
    );
    return;
  }

  if (parts[0] === 'products' && parts[1] && method === 'GET') {
    const id = Number(parts[1]);
    const product = getProducts().find((item) => item.id === id);

    if (!product) {
      notFound(res, 'Product not found');
      return;
    }

    const seller = getSellers().find((item) => item.id === product.seller_id);
    const reviews = getReviews().filter((item) => item.product_id === id);

    res.status(200).json(respond({ product, seller, reviews }));
    return;
  }

  if (route === 'sellers' && method === 'GET') {
    res.status(200).json(respond(approvedSellers()));
    return;
  }

  if (parts[0] === 'sellers' && parts[1] && method === 'GET') {
    const id = Number(parts[1]);
    const seller = getSellers().find((item) => item.id === id);

    if (!seller) {
      notFound(res, 'Seller not found');
      return;
    }

    const products = getProducts().filter((item) => item.seller_id === id && item.status === 'approved');
    res.status(200).json(respond({ seller, products }));
    return;
  }

  if (route === 'cart') {
    if (method !== 'GET') {
      methodNotAllowed(res);
      return;
    }

    res.status(200).json(respond(getCart()));
    return;
  }

  if (route === 'checkout') {
    if (method !== 'POST') {
      methodNotAllowed(res);
      return;
    }

    res.status(200).json(
      respond(
        {
          order_number: 'CN-1099',
          status: 'pending_confirmation',
        },
        {},
        'Checkout completed in demo mode'
      )
    );
    return;
  }

  if (route === 'custom-request') {
    if (method !== 'POST') {
      methodNotAllowed(res);
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
    return;
  }

  if (route === 'seller/dashboard' && method === 'GET') {
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
    return;
  }

  if (route === 'admin/overview' && method === 'GET') {
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
    return;
  }

  if (route === 'admin/sellers/pending' && method === 'GET') {
    res.status(200).json(
      respond(getSellers().filter((item) => item.approval_status === 'pending'))
    );
    return;
  }

  if (route === 'admin/products/pending' && method === 'GET') {
    res.status(200).json(
      respond(getProducts().filter((item) => item.status === 'pending_review'))
    );
    return;
  }

  notFound(res);
}
