<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DeviceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kitchendevices')->insert([
            'kitchen_id' => 1,
            'id_kitchen_section' => 1,
            'device_name' => 'Device 1',
        ]);
    }
}
