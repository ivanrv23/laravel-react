<?php

namespace Database\Seeders;

use App\Models\Institution;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InstitutionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Institution::create([
            'ruc' => '20605050533',
            'socialname' => 'Colegio de Ingenieros del Perú - Cajamarca',
            'address' => 'Jr. Alfonso Ugarte 555',
            'phone' => '076 363530',
            'email' => 'soporte@cipcajamarca.com',
        ]);
    }
}
