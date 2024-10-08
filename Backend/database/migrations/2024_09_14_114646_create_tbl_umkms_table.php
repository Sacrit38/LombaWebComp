<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tbl_umkms', function (Blueprint $table) {
            $table->id();
            $table->integer('category_id');
            $table->integer('users_id');
            $table->string('nama_perusahaan');
            $table->text('alamat');
            $table->string('no_telp', 15);
            $table->date('tanggal_berdiri');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_umkms');
    }
};
