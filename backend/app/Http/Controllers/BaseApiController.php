<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller;

class BaseApiController extends Controller
{
    protected function respond($data, array $meta = [], string $message = ''): array
    {
        return [
            'data' => $data,
            'meta' => $meta,
            'message' => $message,
        ];
    }
}
