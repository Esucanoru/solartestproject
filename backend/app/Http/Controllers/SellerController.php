<?php

namespace App\Http\Controllers;

class SellerController extends BaseApiController
{
    public function index(): array
    {
        $sellers = array_values(array_filter(MockData::get('sellers'), fn ($seller) => $seller['approval_status'] === 'approved'));

        return $this->respond($sellers);
    }

    public function show(int $id): array
    {
        $sellers = MockData::get('sellers');
        $products = MockData::get('products');
        $seller = collect($sellers)->firstWhere('id', $id);
        $sellerProducts = array_values(array_filter($products, fn ($product) => $product['seller_id'] === $id && $product['status'] === 'approved'));

        return $this->respond([
            'seller' => $seller,
            'products' => $sellerProducts,
        ]);
    }
}
