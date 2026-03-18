<?php

namespace App\Http\Controllers;

class CheckoutController extends BaseApiController
{
    public function store(): array
    {
        return $this->respond([
            'order_number' => 'CN-1099',
            'status' => 'pending_confirmation',
        ], [], 'Checkout completed in demo mode');
    }
}
