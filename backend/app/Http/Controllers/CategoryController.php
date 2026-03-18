<?php

namespace App\Http\Controllers;

class CategoryController extends BaseApiController
{
    public function index(): array
    {
        return $this->respond(MockData::get('categories'));
    }
}
