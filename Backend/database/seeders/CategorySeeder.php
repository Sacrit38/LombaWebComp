<?php

namespace Database\Seeders;

use App\Models\tbl_category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tbl_category')->insert([
            [
                'category' => "Makanan",
            ],
            [
                'category' => "Kerajinan",
            ],
            [
                'category' => "Pakaian",
            ],
            ]);
    }
}
