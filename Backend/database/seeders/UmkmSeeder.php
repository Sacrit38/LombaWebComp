<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class UmkmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Insert 50 UMKM records
        for ($i = 0; $i < 10; $i++) {
            DB::table('tbl_umkms')->insert([
                'category_id' => $faker->numberBetween(1, 3), // Misalnya ada 5 kategori
                'users_id' => $faker->numberBetween(1, 10),   // Misalnya ada 10 user di database
                'nama_perusahaan' => $faker->company,
                'alamat' => $faker->address,
                'no_telp' => $faker->numerify('08###########'), // Menghasilkan nomor telepon format Indonesia
                'tanggal_berdiri' => $faker->date('Y-m-d', 'now'),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
