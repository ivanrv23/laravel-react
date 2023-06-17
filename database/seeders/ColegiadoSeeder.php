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
        //
        Colegiado::factory(50)->create();
    }
}
