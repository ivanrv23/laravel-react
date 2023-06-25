<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::create([
            'name' => 'Superusuario',
            'email' => 'admin@gmail.com',
            'rol_id' => 1,
            'person_id' => 1,
            'type' => 1,
            'password' => bcrypt('admin'),
        ]);
        
        User::create([
            'name' => 'Colegiado',
            'email' => 'colegiado@gmail.com',
            'rol_id' => 2,
            'person_id' => 1,
            'type' => 2,
            'password' => bcrypt('12345678'),
        ]);

        User::create([
            'name' => 'Contador',
            'email' => 'contador@gmail.com',
            'rol_id' => 2,
            'person_id' => 1,
            'type' => 1,
            'password' => bcrypt('12345678'),
        ]);

        // $this->call([
        //     ColegiadoSeeder::class,
        // ]);
    }
}
