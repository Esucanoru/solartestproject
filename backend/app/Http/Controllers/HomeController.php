<?php

namespace App\Http\Controllers;

class HomeController extends BaseApiController
{
    public function index(): array
    {
        $products = MockData::get('products');
        $categories = MockData::get('categories');
        $sellers = MockData::get('sellers');

        return $this->respond([
            'hero' => [
                'eyebrow' => 'Handcrafted furniture marketplace',
                'headline' => 'Distinctive furniture from independent makers.',
                'subheadline' => 'Discover collectible pieces, boutique workshops, and made-to-order craftsmanship.',
                'primary_cta' => ['label' => 'Browse catalog', 'href' => '/catalog'],
                'secondary_cta' => ['label' => 'Request custom work', 'href' => '/custom-request'],
            ],
            'featured_categories' => array_slice($categories, 0, 6),
            'featured_products' => array_slice(array_values(array_filter($products, fn ($product) => $product['status'] === 'approved')), 0, 6),
            'featured_sellers' => array_slice(array_values(array_filter($sellers, fn ($seller) => $seller['approval_status'] === 'approved')), 0, 4),
        ]);
    }
}
