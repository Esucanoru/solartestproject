<?php

namespace App\Http\Controllers;

class CustomRequestController extends BaseApiController
{
    public function store(): array
    {
        return $this->respond([
            'id' => 999,
            'status' => 'submitted',
        ], [], 'Custom request submitted');
    }
}
