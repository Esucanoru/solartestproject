<?php

namespace App\Http\Controllers;

class CartController extends BaseApiController
{
    public function show(): array
    {
        return $this->respond(MockData::get('cart'));
    }

    public function add(): array
    {
        return $this->respond(['status' => 'ok'], [], 'Mock item added to cart');
    }

    public function remove(): array
    {
        return $this->respond(['status' => 'ok'], [], 'Mock item removed from cart');
    }
}
