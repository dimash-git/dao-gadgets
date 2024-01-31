<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KitchenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kitchens')->insert([
            'name' => 'Example Kitchen',
            'contract_number' => '123456',
            'address' => '123 Main St',
            'mqtt_prefix' => 'example_prefix',
            'mqtt_status' => true,
            'firmware_version' => '1.0.0',
            'alive' => true,
            // 'settings_general'
        ]);
    }
}
