<?php

namespace App\Http\Controllers;

class SellerDashboardController extends BaseApiController
{
    public function summary(): array
    {
        $products = MockData::get('products');
        $orders = MockData::get('orders');
        $requests = MockData::get('custom-requests');

        return $this->respond([
            'stats' => [
                ['label' => 'Active listings', 'value' => count(array_filter($products, fn ($product) => $product['seller_id'] === 2 && $product['status'] === 'approved'))],
                ['label' => 'Open orders', 'value' => count(array_filter($orders, fn ($order) => $order['seller_id'] === 2 && $order['status'] !== 'delivered'))],
                ['label' => 'Custom requests', 'value' => count(array_filter($requests, fn ($request) => $request['seller_id'] === 2))],
                ['label' => 'Response time', 'value' => '8h'],
            ],
            'recent_products' => array_values(array_filter($products, fn ($product) => $product['seller_id'] === 2)),
            'recent_orders' => array_values(array_filter($orders, fn ($order) => $order['seller_id'] === 2)),
            'custom_requests' => array_values(array_filter($requests, fn ($request) => $request['seller_id'] === 2)),
        ]);
    }

    public function products(): array
    {
        return $this->respond(array_values(array_filter(MockData::get('products'), fn ($product) => $product['seller_id'] === 2)));
    }

    public function storeProduct(): array
    {
        return $this->respond([
            'id' => 1001,
            'status' => 'pending_review',
        ], [], 'Product created in demo mode');
    }

    public function orders(): array
    {
        return $this->respond(array_values(array_filter(MockData::get('orders'), fn ($order) => $order['seller_id'] === 2)));
    }

    public function messages(): array
    {
        return $this->respond([
            ['id' => 1, 'sender' => 'Buyer', 'subject' => 'Can the Rowan Pedestal Table be extended?', 'time' => '2h ago'],
            ['id' => 2, 'sender' => 'Buyer', 'subject' => 'What finish options are available for the Arc Writing Desk?', 'time' => 'Yesterday'],
        ]);
    }

    public function customRequests(): array
    {
        return $this->respond(array_values(array_filter(MockData::get('custom-requests'), fn ($request) => $request['seller_id'] === 2)));
    }
}
