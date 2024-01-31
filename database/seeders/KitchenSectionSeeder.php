<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KitchenSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kitchensections')->insert([
            'kitchen_id' => 1,
            'name' => 'Main Section',
            'eng' => 'main_section',
            'type' => 'room',
            'is_active' => true,
            'scrollable' => false,
        ]);
    }
}
