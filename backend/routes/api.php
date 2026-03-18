<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\CustomRequestController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\SellerDashboardController;
use Illuminate\Support\Facades\Route;

Route::get('/home', [HomeController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::get('/sellers', [SellerController::class, 'index']);
Route::get('/sellers/{id}', [SellerController::class, 'show']);

Route::get('/wishlist', fn () => ['data' => []]);
Route::post('/wishlist/toggle', fn () => ['data' => ['status' => 'ok'], 'message' => 'Wishlist updated']);

Route::get('/cart', [CartController::class, 'show']);
Route::post('/cart/add', [CartController::class, 'add']);
Route::post('/cart/remove', [CartController::class, 'remove']);
Route::post('/checkout', [CheckoutController::class, 'store']);
Route::get('/orders', fn () => ['data' => \App\Http\Controllers\MockData::get('orders')]);
Route::post('/custom-request', [CustomRequestController::class, 'store']);

Route::prefix('/seller')->group(function () {
    Route::get('/dashboard', [SellerDashboardController::class, 'summary']);
    Route::get('/products', [SellerDashboardController::class, 'products']);
    Route::post('/products', [SellerDashboardController::class, 'storeProduct']);
    Route::get('/orders', [SellerDashboardController::class, 'orders']);
    Route::get('/messages', [SellerDashboardController::class, 'messages']);
    Route::get('/custom-requests', [SellerDashboardController::class, 'customRequests']);
});

Route::prefix('/admin')->group(function () {
    Route::get('/overview', [AdminController::class, 'overview']);
    Route::get('/sellers/pending', [AdminController::class, 'pendingSellers']);
    Route::post('/sellers/{id}/approve', [AdminController::class, 'approveSeller']);
    Route::get('/products/pending', [AdminController::class, 'pendingProducts']);
    Route::post('/products/{id}/approve', [AdminController::class, 'approveProduct']);
});
