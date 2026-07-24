<?php

namespace App\Modules\Dashboard\Services;

use App\Models\NeuroScore;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Support\Facades\Auth;

class DashboardService
{

    public function getDataEvolution(string $period = '7j')
    {
        $user = Auth::user();

        $days = match ($period) {
            "90j" => 89,
            "30j" => 29,
            default => 6
        };

        $neuroScores = NeuroScore::where('user_id', $user->id)
            ->whereDate('created_at', '>=', Carbon::now()->subDays($days))
            ->get();

        $periodData = collect(CarbonPeriod::create(Carbon::now()->subDays($days), now()));

        // Pour chaque neuroscore, je definis la date comme clé, 
        // Par exemple : ["24-07-2026" : {}]
        $neuroScores = $neuroScores->keyBy(function ($score) {
            return $score->date->toDateString();
        });

        $resultat =  $periodData->map(function (Carbon $date) use ($neuroScores) {
            // Recupere un neuroscore grace à sa clé
            $ns = $neuroScores->get($date->toDateString());

            return [
                "day" => $date->translatedFormat('D'),
                "dopamine" => $ns ? $ns->score_dopamine : 0,
                "cortisol" => $ns ? $ns->score_cortisol : 0,
                "serotonine" => $ns ? $ns->score_serotonine : 0,
                "oxytocine" => $ns ? $ns->score_oxytocine : 0,
            ];
        });

        return $resultat;

    }
}
