<?php

namespace Database\Seeders;

use App\Models\StimulusLog;

use Carbon\Carbon;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // STIMULUS LOG

        // 2 mois en arriere
        $date = Carbon::now()->subMonths(2);

        // Tant qu'on est pas arrivé à la date d'aujourd'hui
        while ($date <= Carbon::now()) {
            // Creer 1 à 5 stimulus par jour
            StimulusLog::factory()
                ->count(rand(1, 5))
                ->create([
                    'created_at' => $date,
                    'updated_at' => $date,
                ]);

            $date->addDay();
        }
    }
}
