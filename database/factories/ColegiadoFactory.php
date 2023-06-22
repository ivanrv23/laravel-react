<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Colegiado>
 */
class ColegiadoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 
        return [
            'name' => $this->faker->name(),
            'surname' => $this->faker->words(2, true),
            'dni' => $this->faker->ean8(),
            'codecip' => $this->faker->ean13(),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'university' => $this->faker->jobTitle(),
            'integration' => $this->faker->date(),
            'state' => rand(0,1),
            'capitulo_id' => 1,
            'institution_id' => 1,
            'agremiado_id' => 1,
        ];
    }
}
