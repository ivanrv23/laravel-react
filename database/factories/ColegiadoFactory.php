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
            'chapter' => $this->faker->jobTitle(),
            'address' => $this->faker->address(),
            'incorporationDate' => $this->faker->date(),
            'phone' => $this->faker->phoneNumber(),
            'cip' => $this->faker->creditCardNumber(),
            'state' => rand(0,1),
        ];
    }
}
