<?php

namespace Database\Seeders;

use App\Models\Colegiado;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColegiadoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // crear 10 colegiados desde factory
        Colegiado::factory(10)->create();
    }
}
