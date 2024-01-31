<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use App\Models\User;


class AdminSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => fake()->name(),
            'email' => 'therebro@mail.ru',
            'email_verified_at' => now(),
            'password' => '$2y$12$PQJhcb5H2cp1h0oStPixa.1cWLr8OJ5FBHcCratDEcZlycEgf7Cry',
            'remember_token' => null,
            // 'kitchen_id' => 1,

        ])->assignRole('admin');
    }
}
