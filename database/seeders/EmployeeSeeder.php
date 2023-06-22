<?php

namespace Database\Seeders;

use App\Models\employee;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Employee::create([
            'institution_id' => 1,
            'name' => 'Administrador',
            'surname' => 'General Full',
            'dni' => '50203040',
            'phone' => '977654321',
            'address' => 'Jr. Alfonso Ugarte 777',
            'university' => 'Universidad Nacional de Cajamarca',
            'cargo' => 'Sistemas',
            'integration' => date('Y-m-d'),
        ]);

        Employee::create([
            'institution_id' => 1,
            'name' => 'Contadora',
            'surname' => 'García García',
            'dni' => '10203040',
            'phone' => '987654321',
            'address' => 'Jr. Alfonso Ugarte 333',
            'university' => 'IST Cajamarca',
            'cargo' => 'Contadora',
            'integration' => date('Y-m-d'),
        ]);
    }
}
