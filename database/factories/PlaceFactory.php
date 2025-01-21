<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Place>
 */
class PlaceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'lat_lng' => fake()->randomNumber(5, true) . ', ' . fake()->randomNumber(5, true),
            'thumbnail_url' => 'storage/app/public/noimage.png',
            'description' => fake()->text(500)
        ];
    }
}
