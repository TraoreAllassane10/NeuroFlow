<?php

namespace Database\Factories;

use App\Models\StimulusLog;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<StimulusLog>
 */
class StimulusLogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $date = fake()->dateTimeBetween('-2 months', 'now');


        return [
            'logged_at' => Carbon::instance($date)->format('H:i'),

            'label' => fake()->randomElement([
                'TikTok',
                'Jeu vidéo',
                'Netflix',
                'Lecture',
                'Sport',
                'Méditation',
                'Musique',
                'YouTube',
                'Instagram',
                'Travail profond',
            ]),

            'categorie' => fake()->randomElement([
                "sommeil",
                "nourriture",
                "jeu",
                'sport',
                "education",
                'achats',
                'telephone',
                'divertissement',
                'travail',
                'autre'
            ]),

            'intensite' => fake()->numberBetween(1, 10),

            'type' => fake()->randomElement([
                'rapide',
                'lente'
            ]),

            'user_id' => 2,

        ];
    }
}
