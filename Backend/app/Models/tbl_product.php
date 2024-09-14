<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_product extends Model
{
    use HasFactory;
    protected $table = "tbl_products";

    protected $primaryKey="id";
    protected $fillable = ['users_id','nama_produk','deskripsi_produk','harga','stok','gambar_produk','tipe_produk'];
}
