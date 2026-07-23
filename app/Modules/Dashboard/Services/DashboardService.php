<?php

namespace App\Modules\Dashboard\Services;

use App\Models\NeuroScore;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class DashboardService
{

    public function getDataEvolution(string $period = '7j')
    {
        $user = Auth::user();

        if ($period == '90j') {
            $neuroScores = NeuroScore::where('user_id', $user->id)
                ->whereDate('created_at', '>=', Carbon::now()->subDays(89))
                ->get();
        } else if ($period == '30j') {
            $neuroScores = NeuroScore::where('user_id', $user->id)
                ->whereDate('created_at', '>=', Carbon::now()->subDays(29))
                ->get();
        } else {
            $neuroScores = NeuroScore::where('user_id', $user->id)
                ->whereDate('created_at', '>=', Carbon::now()->subDays(6))
                ->get();
        }

        return $neuroScores->map(function ($ns) {
            return [
                "day" => $ns->created_at->translatedFormat('D'),
                "dopamine" => $ns->score_dopamine,
                "cortisol" => $ns->score_cortisol,
                "serotonine" => $ns->score_serotonine,
                "oxytocine" => $ns->score_oxytocine,
            ];
        })
            ->values();
    }
}
