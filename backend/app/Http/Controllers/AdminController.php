<?php

namespace App\Http\Controllers;

class AdminController extends BaseApiController
{
    public function overview(): array
    {
        $sellers = MockData::get('sellers');
        $products = MockData::get('products');
        $orders = MockData::get('orders');
        $requests = MockData::get('custom-requests');

        return $this->respond([
            'stats' => [
                ['label' => 'Approved sellers', 'value' => count(array_filter($sellers, fn ($seller) => $seller['approval_status'] === 'approved'))],
                ['label' => 'Pending sellers', 'value' => count(array_filter($sellers, fn ($seller) => $seller['approval_status'] === 'pending'))],
                ['label' => 'Pending products', 'value' => count(array_filter($products, fn ($product) => $product['status'] === 'pending_review'))],
                ['label' => 'Orders', 'value' => count($orders)],
                ['label' => 'Custom requests', 'value' => count($requests)],
            ],
        ]);
    }

    public function pendingSellers(): array
    {
        return $this->respond(array_values(array_filter(MockData::get('sellers'), fn ($seller) => $seller['approval_status'] === 'pending')));
    }

    public function approveSeller(int $id): array
    {
        return $this->respond(['seller_id' => $id, 'status' => 'approved'], [], 'Seller approved in demo mode');
    }

    public function pendingProducts(): array
    {
        return $this->respond(array_values(array_filter(MockData::get('products'), fn ($product) => $product['status'] === 'pending_review')));
    }

    public function approveProduct(int $id): array
    {
        return $this->respond(['product_id' => $id, 'status' => 'approved'], [], 'Product approved in demo mode');
    }
}
