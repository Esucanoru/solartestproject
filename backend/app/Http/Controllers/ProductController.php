<?php

namespace App\Http\Controllers;

class ProductController extends BaseApiController
{
    public function index(): array
    {
        $products = array_values(array_filter(MockData::get('products'), fn ($product) => $product['status'] === 'approved'));

        return $this->respond($products, [
            'total' => count($products),
            'filters' => ['category', 'material', 'price', 'lead_time', 'customizable'],
        ]);
    }

    public function show(int $id): array
    {
        $products = MockData::get('products');
        $reviews = MockData::get('reviews');
        $sellers = MockData::get('sellers');

        $product = collect($products)->firstWhere('id', $id);
        $seller = collect($sellers)->firstWhere('id', $product['seller_id'] ?? null);
        $productReviews = array_values(array_filter($reviews, fn ($review) => $review['product_id'] === $id));

        return $this->respond([
            'product' => $product,
            'seller' => $seller,
            'reviews' => $productReviews,
        ]);
    }
}
