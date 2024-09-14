<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tbl_product;

class ProductController extends Controller
{
    public function product(){
        $produk = tbl_product::all();
        return response()->json($produk);
    }
}
