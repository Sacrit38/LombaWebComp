<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::post("/login",[LoginController::class,"index"]);
Route::post("api/register",[LoginController::class,"register"]);
Route::get("/product",[ProductController::class,"product"]);
Route::get("/category",[CategoryController::class,"index"]);
