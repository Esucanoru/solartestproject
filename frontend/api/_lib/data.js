import fs from 'node:fs';

function readJsonFile(name) {
  return JSON.parse(
    fs.readFileSync(new URL(`../_data/${name}.json`, import.meta.url), 'utf8')
  );
}

export function respond(data, meta = {}, message = '') {
  return {
    data,
    meta,
    message,
  };
}

export function getCategories() {
  return readJsonFile('categories');
}

export function getProducts() {
  return readJsonFile('products');
}

export function getSellers() {
  return readJsonFile('sellers');
}

export function getReviews() {
  return readJsonFile('reviews');
}

export function getOrders() {
  return readJsonFile('orders');
}

export function getCustomRequests() {
  return readJsonFile('custom-requests');
}

export function getCart() {
  return readJsonFile('cart');
}

export function approvedProducts() {
  return getProducts().filter((product) => product.status === 'approved');
}

export function approvedSellers() {
  return getSellers().filter((seller) => seller.approval_status === 'approved');
}
