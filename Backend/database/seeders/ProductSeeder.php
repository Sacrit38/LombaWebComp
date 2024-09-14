<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Array yang berisi link gambar inputan sendiri
        $manualImages = [
            'https://img-global.cpcdn.com/recipes/acfa3bda52a55bb9/1200x630cq70/photo.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQ0l_DVUR6Am2SeEGJdUpPK6nJYR7IzOrfw&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpkUNLtcSW2W7x9pVWfRA1M3VlOgYIdSWf3r2AQoh1_FtyJEqeX8vrlhoEte6RHPl0A&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-wKN6M_EMrYmrzVWmZE_PYCW2QCDZq_JfQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9duCkXxA2UOO65HhFHBH_TjnNd5CwN08gw&s',
        ];

        for ($i = 0; $i < 5; $i++) {
            // Jika index lebih kecil dari 10, gunakan gambar dari array manual
            if ($i < 5) {
                $image = $manualImages[$i];
            } else {
                // Jika lebih dari 10, gunakan gambar dari Faker
                $image = $faker->imageUrl(640, 480, 'products', true);
            }

            DB::table('tbl_products')->insert([
                'users_id' => $faker->numberBetween(1, 10), // misal ada 10 user
                'nama_produk' => $faker->word(),
                'deskripsi_produk' => $faker->sentence(),
                'harga' => $faker->randomFloat(2, 1000, 10000),
                'stok' => $faker->numberBetween(1, 100),
                'gambar_produk' => $image, // Menggunakan gambar sesuai kondisi
                'tipe_produk' => $faker->randomElement(['elektronik', 'pakaian', 'makanan', 'furniture']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
